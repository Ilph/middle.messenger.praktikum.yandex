import tpl from "./chatsAside.hbs"
import { Block } from "../../../../utils/Block"
import { IChat } from "../../component/chat/chat"

interface IChatAside {
  [key: string]: {
    [key: string]: string
  } | {
    [key: string]: (event: MouseEvent) => void
  } | Block<IChat>
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
}
