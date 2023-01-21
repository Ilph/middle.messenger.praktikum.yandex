import tpl from "./chat.hbs"
import { Block } from "../../../../utils/Block"

interface IChat {
  [key: string]: {
    [key: string]: string
  } | {
    [key: string]: (event: MouseEvent) => void
  } | any
}

export class Chat extends Block<IChat> {
  constructor(props: IChat) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {
      name: this.props.data.name,
      you: this.props.data.you,
      sometext: this.props.data.sometext,
      date: this.props.data.date,
      quantity: this.props.data.quantity
    })
  }
}
