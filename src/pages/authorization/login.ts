//HTML's template
import tpl from "./login.hbs"
//Component's template
import { Block } from "../../utils/Block"
//type
import { IButton } from "../../components/button/button"
import { IInput } from "../../components/input/input"
//store
// import store, { StoreEvents } from "../../store/store"


export interface ILogin {
  data: {
    entry: string;
    registration: string
  },
  attributes: {
    class: string
  },
  events: {
    focus: (event: FocusEvent) => void,
    blur: (event: FocusEvent) => void
  },
  inputs: Block<IInput>[],
  button: Block<IButton>[]
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
    const input = Array.from(this._element!.querySelectorAll("form input"))
    const button = Array.from(this._element!.querySelectorAll("form button"))
    const inputAndButton = input.concat(button)
    
    inputAndButton.forEach(el => {
      if(!this.props.events) {
        return
      }
  
      Object.keys(events).forEach(eventName => {
        if(eventName !== "click" && el.tagName == "INPUT") {
          el.addEventListener(eventName, events[eventName])
        } else if(eventName == "click" && el.tagName == "BUTTON") {
          const element: HTMLElement = <HTMLElement>el
            switch(element.dataset.handler) {
              case "signin": 
                el.addEventListener(eventName, events[eventName][0])
                break
              case "changepage":
                el.addEventListener(eventName, events[eventName][1])
                break
            }
        }
      })
    })
  }
}
