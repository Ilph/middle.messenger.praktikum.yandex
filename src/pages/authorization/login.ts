import tpl from "./login.hbs"
import { Block } from "../../utils/Block"
import { IButton } from "../../components/button/button"


interface ILogin {
  data: {
    entry: string;
    registration: string
  },
  attributes: {
    class: string
  },
  inputLogin: inputLogin;
  inputPassword: inputPassword;
  button: IButton
}

export class Login extends Block<ILogin> {
  constructor(props: ILogin) {
    super("section", props)
  }

  render() {
    return this.compile(tpl, {
      entry: this.props.data.entry,
      registration: this.props.data.registration
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
