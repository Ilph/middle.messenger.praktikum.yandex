//HTML's template
import tpl from "./chat.hbs"
//Component's template
import { Block } from "../../utils/Block"
import ChatsController from "../../controllers/chats-controllers"
import AuthController from "../../controllers/auth-controller"
import { ChatMainType } from "../../modules/chat/bloks/chatsMain/chatMain"
import { isEqual } from "../../utils/isEqual"
import { ChatAside } from "../../modules/chat/bloks/chatsAside/chatsAside"
import { chatWithStore } from "../../modules/chat/component/chat/chat"
import { createModal } from "../../modules/userProfile/utils/createModalWindow"

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
        title: data.title,
        created_by: data.created_by,
        last_message: data.last_message,
        unread_count: data.unread_count,
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
    createModal(".chat-header__dropdown-menu button")
    const childChatMain = this.children.chatMain as unknown
    (childChatMain as Block<ChatMainType>).setProps({login: newProps.user.data.login})

    const childChatAside = this.children.chatAside as unknown

    if(newProps.chats) {
      (childChatAside as Block<ChatAside>).children.chats = this.createChats(newProps.chats)
    }

    return true
  }

  render() {
    return this.compile(tpl, {})
  }
}
