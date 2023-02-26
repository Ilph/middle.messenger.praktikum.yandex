//HTML's template
import tpl from "./chat.hbs"
//Component's template
import { Block } from "../../utils/Block"
import ChatsController from "../../controllers/chats-controllers"
import AuthController from "../../controllers/auth-controller"
import { ChatMainType } from "../../modules/chat/bloks/chatsMain/chatMain"
// import { isEqual } from "../../utils/isEqual"
import { ChatAside } from "../../modules/chat/bloks/chatsAside/chatsAside"
import { chatWithStore } from "../../modules/chat/component/chat/chat"
import { isEqual } from "../../utils/isEqual"

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
    AuthController.fetchUser()
  }

  private createChats(state: any) {
    return state.map((data: any) => {
      return new chatWithStore({
        avatarChat: `https://ya-praktikum.tech/api/v2/resources${data.avatar}`,
        title: data.title,
        created_by: data.last_message == null ? "" : data.last_message.user.login,
        last_message: data.last_message == null ? "" : data.last_message.content,
        unread_count: data.unread_count,
        attributes: {
          class: "chat-lists"
        },
        events: {
          click: () => {
            ChatsController.selectChat(data.id)
          }
        }
      })
    })
  }

  protected componentDidUpdate(oldProps: any, newProps: any) {
    if(isEqual(oldProps, newProps)) {
      return false
    }

    const childChatMain = this.children.chatMain as unknown
    (childChatMain as Block<ChatMainType>).setProps({login: newProps.user.data.login, data: {avatarChatMain: `https://ya-praktikum.tech/api/v2/resources${newProps.user.data.avatar}`}})

    const childChatAside = this.children.chatAside as unknown
    if(newProps.chats) {
      (childChatAside as Block<ChatAside>).children.chats = this.createChats(newProps.chats)
    }
    return false
  }

  render() {
    return this.compile(tpl, {})
  }
}
