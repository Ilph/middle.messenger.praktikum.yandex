import tpl from "./chat.hbs"
import {Block} from "../../utils/Block"

export class Chat extends Block {

  constructor(tagName: string, props: Record<string, unknown>) {
    super(tagName, props)
  }

  render() {
    return tpl({text: this.props.text})
  }
}


