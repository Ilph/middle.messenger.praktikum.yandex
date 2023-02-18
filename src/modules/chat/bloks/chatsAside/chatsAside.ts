import tpl from "./chatsAside.hbs"
import { Block } from "../../../../utils/Block"

interface IChatAside {
  [key: string]: {
    [key: string]: string
  } | {
    [key: string]: (event: MouseEvent) => void
  }
}

export class ChatAside extends Block<IChatAside> {
  constructor(props: IChatAside) {
    super("aside", props)
  }

  render() {
    return this.compile(tpl, {
      profile: this.props.data.profile
    })
  }

  _addEvents() {
    const {events = {}}: any = this.props
    const button = this._element!.querySelector("button")
    Object.keys(events).forEach(eventName => {
      button!.addEventListener(eventName, events[eventName])
    })
  }
}
