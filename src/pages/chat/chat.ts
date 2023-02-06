//HTML's template
import tpl from "./chat.hbs"
//Component's template
import { Block } from "../../utils/Block"

export interface IChatType {
  [key: string]: {
    [key: string]: string
  } | {
    [key: string]: (event: MouseEvent) => void
  } | any
}

export class Chat extends Block<IChatType> {

  constructor(props: IChatType) {
    super("section", props)
  }

  render() {
    return this.compile(tpl, {})
  }
}
