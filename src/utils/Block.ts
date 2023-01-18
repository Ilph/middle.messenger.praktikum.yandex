import {EventBus} from "./EventBus"

interface Props<Type> {
  content: Type,
}

export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:componentt-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  }

  private _element: HTMLElement | null = null
  private _meta: {tagName: string, props: unknown}
  private eventBus: () => EventBus
  protected props: Record<string, unknown>

  constructor(tagName="div", props = {}) {
    const eventBus = new EventBus()
    
    this.eventBus = () => eventBus

    this._meta = {
      tagName,
      props
    }

    this.props = this._makePropsProxy(props)

    this._registerEvents(eventBus)
    eventBus.emit(Block.EVENTS.INIT)
  }

  private _registerEvents(eventBus: any) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName)
  }

  private _createResources() {
    const {tagName} = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  private _init() {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  private _render() {
    const block = this.render()

    this._removeEvents()

    if(this._element) {
      this._element.innerHTML = block
      this._addEvents()
    } else {
      throw new Error("Element dosn't exist")
    }
  }

  protected render(): string {
    return ""
  }

  private _componentDidMount() {
    this.componentDidMount()
  }

  protected componentDidMount() {

  }

  protected dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  private _componentDidUpdate(oldProps: Props<unknown>, newProps: Props<unknown>) {

  }

  protected componentDidUpdate(oldProps: Props<unknown>, newProps: Props<unknown>) {
    return true
  }

  setProps = (nextProps: string) => {
    if(!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element() {
    return this._element;
  }

  getContent() {
    return this.element;
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

  private _addEvents() {
    const {events = {}}: any = this.props

    Object.keys(events).forEach(eventName => {
      this._element!.addEventListener(eventName, events[eventName])
    });
  }

  private _removeEvents() {
    const {events = {}}: any = this.props;

    Object.keys(events).forEach(eventName => {
      this._element!.removeEventListener(eventName, events[eventName])
    });
  }

}
