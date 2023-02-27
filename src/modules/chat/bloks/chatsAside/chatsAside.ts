import tpl from "./chatsAside.hbs"
import { Block } from "../../../../utils/Block"
import { chatWithStore } from "../../component/chat/chat"
import ChatsController from "../../../../controllers/chats-controllers"
import ava from "../../../../../static/icons/iconAvatar.png"
import { isEqual } from "../../../../utils/isEqual"

interface IChatAside {
  [key: string]: {
    [key: string]: string
  } | {
    [key: string]: (event: MouseEvent) => void
  }
}

export class ChatAside extends Block<IChatAside> {
  constructor(props: IChatAside) {
    super("aside", props)
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    if(isEqual(oldProps, newProps)) {
      return false
    }
    
    this.children.chats = this.createChats(newProps.chats)
    return true
  }

  private createChats(state: any) {
    return state.map((data: any) => {
      return new chatWithStore({
        avatarChat: data.avatar == null ? ava : `https://ya-praktikum.tech/api/v2/resources${data.avatar}`,
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

  render() {
    return this.compile(tpl, {
      profile: this.props.data.profile
    })
  }

  _addEvents() {
    const {events = {}}: any = this.props
    const button = this._element!.querySelector("button")
    Object.keys(events).forEach(eventName => {
      button!.addEventListener(eventName, events[eventName])
    })
  }
}
