//HTML's template
import tpl from "./registration.hbs"
//Component's template
import { Block } from "../../utils/Block"
//type
import { IInput } from "../../components/input/input"

export interface IRegistration {
  [key: string]: {
    [key: string]: string | any
  } | Block<IInput>
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
              case "registration": 
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
