//HTML's template
import tpl from "./chat.hbs"
//Component's template
import { Block } from "../../utils/Block"
import ChatsController from "../../controllers/chats-controllers"

export interface IChatType {
  [key: string]: {
    [key: string]: string
  } | {
    [key: string]: (event: MouseEvent) => void
  } | any
}

export class ChatPage extends Block<IChatType> {

  constructor(props: IChatType) {
    super("section", props)
    ChatsController.fetchChats()
  }

  render() {
    return this.compile(tpl, {})
  }
}
