import tpl from "./avatar.hbs"
import { Block } from "../../../../utils/Block"

export interface IAvatar {
  attributes: {
    class: string
  }
}

export class Avatar extends Block<IAvatar> {
  constructor(props: IAvatar) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {})
  }

  _addEvents() {
    const {events = {}}: any = this.props
    const input = this._element!.querySelector("input[type=text]")

    if(!this.props.events) {
        return
      }
    
    Object.keys(events).forEach((name) => {
      input!.addEventListener(name, events[name])
    })
  }
}
