import {EventBus} from "./EventBus"
import { v4 as makeUUID } from 'uuid'

export class Block<T> {

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:componentt-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  }

  private _element: HTMLElement | null = null
  private _meta: {tagName: string, props: T}
  private eventBus: () => EventBus
  protected props: T 
  protected children: {[key: string]: Block<T>}
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
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    const element = document.createElement(tagName)

    if(this.props.settings?.withInternalID) {
      element.setAttribute('data-id', this._id!)
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
    this._element!.innerHTML = ''
    this._removeEvents()
    this._element!.append(block)
    this._addEvents()
    this._addAttributes()
  }

  protected render(): DocumentFragment {
    return new DocumentFragment
  }

  private _componentDidMount(): void {
    this.componentDidMount()

    Object.values(this.children).forEach(child => {
      child.dispatchComponentDidMount()
    })
  }

  protected componentDidMount(): boolean {
    return true
  }

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
    if(Object.keys(this.children).length) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  private _componentDidUpdate(oldProps: T, newProps: T): void {
    if(this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  protected componentDidUpdate(oldProps: T, newProps: T): boolean {
    return true
  }

  setProps = (nextProps: string) => {
    if(!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element(): HTMLElement | null{
    return this._element;
  }

  getContent(): HTMLElement | null{
    return this.element;
  }

  _getChildren(propsAndChildren: T) {
    const children: {[key: string]: Block<T>} = {}
    const props: any = {}

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else if(Array.isArray(value)) {
        value.forEach(item => {
          Object.entries(item).forEach(([key, value]) => {
            if (value instanceof Block) {
              children[key] = value
          } 
        })
        })
      } else {
        props[key] = value
      }
    })
    return { children, props }
}

  compile(template: (prop: object) => string, props: T) {
    const propsAndStubs = { ...props }

    Object.entries(this.children).forEach(([key, child]) => {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`
    });

    const html = template(propsAndStubs)

    const fragment = document.createElement('template')

    fragment.innerHTML = html
    
    Object.values(this.children).forEach(child => {
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
        
        if(!stub) {
          return
        }
        stub.replaceWith(child.getContent()!)
    })
    return fragment.content
  }
  
  _makePropsProxy(props: Record<string, unknown>) {

    const self = this;

    return new Proxy(props, {
      get(target: any, prop: string) {
        const value = target[prop]
        return typeof value === "function" ? value.bind(target) : value
      },
      set(target: any, prop, value) {
        const oldTarget: any = {...target}
        target[prop] = value
  
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target)
        return true
      },
      defineProperty() {
        throw new  Error("Нет доступа")
      }
    })
  }

  private _addEvents(): void {
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
    });
  }

  private _addAttributes() {
    const {attributes = {}}: T = this.props

    if(!this.props.attributes) {
      return
    }

    Object.entries(attributes).forEach(([key, value]) => {
      this._element?.setAttribute(key, value)
    })
  }
}
