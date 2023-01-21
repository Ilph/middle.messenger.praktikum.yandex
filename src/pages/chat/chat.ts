import tpl from "./chat.hbs"
import {Block} from "../../utils/Block"

interface ChatType {
  [key: string]: {
    [key: string]: string
  } | {
    [key: string]: (event: MouseEvent) => void
  } | any
}

export class Chat extends Block<ChatType> {

  constructor(props: ChatType) {
    super("section", props)
  }

  render() {
    return this.compile(tpl, {
    })
  }
}
