import { render, renderRemove } from "../renderDom"

export class Route {

  private _pathname: string
  private _blockClass: any
  private _block: any
  private _props: any

  constructor(pathname: string, view: any, props: any) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      renderRemove(this._props.rootQuery)
    }
  }

  match(pathname: string) {
    return pathname === this._pathname
  }

  render() {
    if(!this._block) {
      this._block = this._blockClass()
      render(this._props.rootQuery, this._block)
      return
    }
    render(this._props.rootQuery, this._block)
  }
} 
