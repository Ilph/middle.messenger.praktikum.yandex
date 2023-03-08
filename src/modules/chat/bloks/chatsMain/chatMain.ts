//HTML's templates
import tpl from "./chatMain.hbs"
//Component's template
import { Block } from "../../../../utils/Block"
import { Message, IMessage } from "../../component/message/message"
//types
import {Message as Mes} from "../../../../controllers/messages-controller"
//icons
import dot from "../../../../../static/icons/3dot.png"
import clip from "../../../../../static/icons/clip.png"
import arrowRigth from "../../../../../static/icons/arrowRigth.png"
import { createModal } from "../../../userProfile/utils/createModalWindow"
import { isEqual } from "../../../../utils/isEqual"


export interface ChatMainType {
  [key: string]: string | Block<IMessage>[] | {
    [key: string]: string
  }
}

export class ChatMain extends Block<ChatMainType> {
  constructor(props: ChatMainType) {
    super("section", props)
  }

  private createMessages(props: any) {
    const selectedChat = props.selectedChat
    const allMessages: Block<IMessage>[] = []
    props.messages[selectedChat].forEach((elements: Mes) => {
      if(Array.isArray(elements)) {
        elements.forEach((item) => {
          const milliseconds = Date.parse(item.time)
          const date = new Date(milliseconds)
          const time = `${date.getHours()}:${date.getMinutes()}`
          const mes = new Message({
            content: item.content,
            time: time,
            attributes: {
              class: "chat-body__wrapper-text"
            },
            isMine: props.user.data.id === item.user_id
          })
          allMessages.push(mes)
        })
      } else {
        const milliseconds = Date.parse(elements.time)
          const date = new Date(milliseconds)
          const time = `${date.getHours()}:${date.getMinutes()}`
          const mes = new Message({
            content: elements.content,
            time: time,
            attributes: {
              class: "chat-body__wrapper-text"
            },
            isMine: props.user.data.id === elements.user_id
          })
          allMessages.push(mes)
      }
    })
    return allMessages
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {

    const childMessage = this.children as unknown
    if(newProps.selectedChat) {
      (childMessage as Record<string, unknown>).messagesInstance = this.createMessages(newProps)
    }
    return true
  }

  render() {
    return this.compile(tpl, {
      avatarChatMain: this.props.data.avatarChatMain,
      login: this.props.data.login,
      dots: dot,
      clip: clip,
      arrowRigth: arrowRigth
    })
  }
  
  protected componentDidMount() {
    const modal = document.querySelector("#modal")
    if(modal) {
      return
    }
    createModal()
  }
  
  _addEvents() {
    const {events = {}}: any = this.props
    const buttons = Array.from(this._element!.querySelectorAll("button"))
    buttons.forEach(el => {
      if(!this.props.events) {
        return
      }

      Object.keys(events).forEach(eventName => {
        const element: HTMLElement = <HTMLElement>el
        switch(element.dataset.chat) {
          case("sendMessage"):
            el.addEventListener(eventName, events[eventName][0])
            break
          case("deleteChat"):
            el.addEventListener(eventName, events[eventName][1])
            break
          case("addUser"):
            el.addEventListener(eventName, events[eventName][2])
            break
          case("deleteUser"):
            el.addEventListener(eventName, events[eventName][3])
            break
          case("addChat"):
            el.addEventListener(eventName, events[eventName][4])
            break
          case("addAvatarChat"):
            el.addEventListener(eventName, events[eventName][5])
            break
        }
      })
    })
  }
}
