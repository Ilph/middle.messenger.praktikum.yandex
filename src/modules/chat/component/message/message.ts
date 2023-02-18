//HTML's templates
import tpl from "./message.hbs"
//Component's template
import { Block } from "../../../../utils/Block"

export interface IMessage {
  content: string,
  isMine: boolean,
  attributes: {
    class: string
  }
}

export class Message extends Block<IMessage> {
  constructor(props: IMessage) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {...this.props})
  }
}
