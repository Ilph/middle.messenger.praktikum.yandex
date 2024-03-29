import {EventBus} from "./EventBus"
import { v4 as makeUUID } from "uuid"

export class Block<T> {

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  }

  protected _element: HTMLElement | null = null
  private _meta: {tagName: string, props: {
    [key: string]: {[key: string]: string | number | boolean}}
  }
  private eventBus: () => EventBus
  protected props: {[key: string]: {[key: string]: string | number | boolean}}
  public children: {[key: string]: Block<T>}
  private _id: string | null = null

  constructor(tagName="div", propsAndChildren: T) {
    const eventBus = new EventBus()
    const {children, props} = this._getChildren(propsAndChildren)
    
    this.eventBus = () => eventBus

    this._meta = {
      tagName,
      props
    }
    
    this._id = makeUUID()
    
    this.children = this._makePropsProxy(children)
    this.props = this._makePropsProxy({...props, __id: this._id})

    this._registerEvents(eventBus)
    eventBus.emit(Block.EVENTS.INIT)
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this ))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    const element = document.createElement(tagName)
    if(this.props.settings?.withInternalId) {
      element.setAttribute("data-id", this._id!)
    }
    return element
  }

  private _createResources(): void {
    const {tagName} = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  private _init(): void {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  private _render(): void {
    const block = this.render()
    this._removeEvents()
    this._element!.innerHTML = ""
    this._element!.append(block)
    this._addEvents()
    this._addAttributes()
  }

  protected render(): DocumentFragment {
    return new DocumentFragment
  }

  private _componentDidMount(): void {
    this.componentDidMount()
  }

  protected componentDidMount() {
    return
  }

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
    Object.values(this.children).forEach(child => {
      if (Array.isArray(child) && child.length) {
        child.forEach(ch => {
          if(ch instanceof Block) {
            ch.dispatchComponentDidMount()
          }
        })
      } else if(Array.isArray(child) && !child.length) {
        return
      } else {
        child.dispatchComponentDidMount()
      }
    })
  }

  private _componentDidUpdate(oldProps: T, newProps: T): void {
    if(!this.componentDidUpdate(oldProps, newProps)) {
      return
    }
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  protected componentDidUpdate(oldProps: T, newProps: T): boolean {
    return true
  }

  public setProps = (nextProps:T): T | void=> {
    if(!nextProps) {
      return
    }
    const oldTarget = {...this.props}
    Object.assign(this.props, nextProps)
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, this.props)
  }

  get element(): HTMLElement | null{
    return this._element;
  }

  getContent(): HTMLElement | null{   
    return this.element;
  }

  _getChildren(propsAndChildren: T) {
    const children: {[key: string]: Block<T> | Array<Block<T>>} = {}
    const props: any = {};

    Object.entries(propsAndChildren as Record<string, unknown>).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else if(Array.isArray(value)) {
        children[key] = value.slice()
      } else {
        props[key] = value
      }
    })
    return { children, props }
}

  compile(template: (prop: Record<string, unknown>) => string, props: Record<string, unknown>) {
    const propsAndStubs = { ...props }

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        propsAndStubs[key] = " "
        child.forEach(item => {
          propsAndStubs[key] += `<div data-id="${item._id}"></div>`
        })
      } else {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`
      }
    })

    const html = template(propsAndStubs)
    const fragment = document.createElement("template")
    fragment.innerHTML = html
    
    Object.values(this.children).forEach(child => {
      if (Array.isArray(child)) {
        child.forEach(item => {
          const stub = fragment.content.querySelector(`[data-id="${item._id}"]`)
          if(!stub) {
            return
          }
          stub.replaceWith(item.getContent()!)
        })
      } else {
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
        if(!stub) {
          return
        }
        stub.replaceWith(child.getContent()!)
      }
    })

    return fragment.content
  }
  
  _makePropsProxy(props: any) {

    // const self = this

    return new Proxy(props, {
      get(target: {[key: string]: () => {} | {[key: string]: string | number | boolean}},
        prop: string) {
        const value = target[prop]
        return typeof value === "function" ? value.bind(target) : value
      },
      set(target: {[key: string]: {[key: string]: string | number | boolean}},
        prop: string, value) {
        // const oldTarget: any = {...target}
        target[prop] = value
        // self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target)
        return true
      },
      defineProperty() {
        throw new  Error("Нет доступа")
      }
    })
  }

  protected _addEvents(): void {

    const {events = {}}: any = this.props

    if(!this.props.events) {
      return
    }

    Object.keys(events).forEach(eventName => {
      this._element!.addEventListener(eventName, events[eventName])
    })
  }

  private _removeEvents() {
    const {events = {}}: any = this.props;

    Object.keys(events).forEach(eventName => {
      this._element!.removeEventListener(eventName, events[eventName])
    })
  }

  private _addAttributes() {
    const {attributes = {}} = this.props

    if(!this.props.attributes) {
      return
    }

    Object.entries(attributes).forEach(([key, value]) => {
      if(typeof value === "string") {
        this._element!.setAttribute(key, value)
      }
    })
  }

  show() {
    if(this._element!.style.display == "none") {
      this._element!.style.display = "block"
    }
  }

  hide() {
    if(this._element!.style.display == "block") {
      this._element!.style.display = "none"
    }
  }
}
