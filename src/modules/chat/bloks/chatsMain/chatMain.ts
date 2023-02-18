//HTML's templates
import tpl from "./chatMain.hbs"
//Component's template
import { Block } from "../../../../utils/Block"
import { Message, IMessage } from "../../component/message/message"
//icons
import dot from "../../../../../static/icons/3dot.png"
import clip from "../../../../../static/icons/clip.png"
import arrowRigth from "../../../../../static/icons/arrowRigth.png"
//utils
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
    return props.messages[selectedChat!].map( (elements: any) => {
      return new Message({
        content: elements,
        attributes: {
          class: "chat-body__wrapper-text"
        },
        isMine: props.user.data.id === elements.user_id
      })
    })
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    if(isEqual(oldProps, newProps)) {
      return false
    }
    const childMessage = this.children as unknown
    if(newProps.selectedChat) {
      (childMessage as Record<string, unknown>).messagesInstance = this.createMessages(newProps)
    }
    return true
  }

  render() {
    return this.compile(tpl, {
      login: this.props.login,
      dots: dot,
      clip: clip,
      arrowRigth: arrowRigth
    })
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
        }
      })
    })
  }
}
