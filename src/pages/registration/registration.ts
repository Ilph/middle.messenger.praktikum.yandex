import tpl from "./registration.hbs"
import { Block } from "../../utils/Block"

interface IRegistration {

}

export class Registration extends Block<IRegistration> {
  constructor(props: IRegistration) {
    super("section", props)
  }

  render() {
    return this.compile(tpl, {
      entry: this.props.data.entry,
      signIn: this.props.data.signIn
    })
  }

  _addEvents() {
    const {events = {}}: any = this.props
    const input = Array.from(this._element!.querySelectorAll("input"))
    const button = Array.from(this._element!.querySelectorAll("button"))
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
