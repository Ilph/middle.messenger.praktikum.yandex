//HTML's template
import tpl from "./modal.hbs"
//Component's template
import { Block } from "../../../utils/Block"
//type
import { IButton } from "../../../components/button/button"

interface IModalWindowAvatar {
  [key: string]: Block<IButton> | {
    [key: string]: string | ((event: FocusEvent) => void)
  }
}

export class ModalWindowAvatar extends Block<IModalWindowAvatar> {
  constructor(props: IModalWindowAvatar) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {
      title: this.props.data.title,
    })
  }

  _addEvents() {
    const {events = {}}: any = this.props
    const input = Array.from(this._element!.querySelectorAll(".modal-window input"))
    const button = Array.from(this._element!.querySelectorAll(".modal-window button"))
    const inputAndButton = input.concat(button)
    
    inputAndButton.forEach(el => {
      if(!this.props.events) {
        return
      }
  
      Object.keys(events).forEach(eventName => {
        if(eventName !== "click" && el.tagName == "INPUT") {
          el.addEventListener(eventName, events[eventName])
        } else if(eventName == "click" && el.tagName == "BUTTON") {
          el.addEventListener(eventName, events[eventName])
        }
      })
    })
  }
}
