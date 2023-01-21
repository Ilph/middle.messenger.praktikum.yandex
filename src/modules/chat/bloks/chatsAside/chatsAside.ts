import tpl from "./chatsAside.hbs"
import { Block } from "../../../../utils/Block"

interface IChatAside {
  [key: string]: {
    [key: string]: string
  } | {
    [key: string]: (event: MouseEvent) => void
  } | any
}

export class ChatAside extends Block<IChatAside> {
  constructor(props: IChatAside) {
    super("aside", props)
  }

  render() {
    console.log(this.children)
    console.log(this.props)
    return this.compile(tpl, {
      profile: this.props.data.profile
    })
  }
}
