import tpl from "./chatMain.hbs"
import {Block} from "../../../../utils/Block"

export interface ChatMainType {
  [key: string]: string | {
    [key: string]: string
  }
}

export class ChatMain extends Block<ChatMainType> {
  constructor(props: ChatMainType) {
    super("section", props)
  }

  render() {
    return this.compile(tpl, {
      text: this.props.text
    })
  }
}
