//HTML's template
import tpl from "./profilePassword.hbs"
//Component's template
import { Block } from "../../utils/Block"
//types
import { IAside } from "../../modules/userProfile/blocks/aside/aside"
import { IAvatar } from "../../modules/userProfile/components/image/avatar"
import { IInputProfile } from "../../modules/userProfile/components/input/input"
import { IButton } from "../../components/button/button"
import AuthController from "../../controllers/auth-controller"

export interface IProfilePassword {
  attributes: {
    class: string
  },
  aside: Block<IAside>,
  avatar: Block<IAvatar>,
  oldPassword: Block<IInputProfile>,
  newPassword: Block<IInputProfile>,
  repeatNewPassword: Block<IInputProfile>,
  save: Block<IButton>
}

export class ProfilePassword extends Block<IProfilePassword> {
  constructor(props: IProfilePassword) {
    super("section", props)
    AuthController.fetchUser()
  }

  render() {
    return this.compile(tpl, {})
  }

  protected componentDidUpdate(newProps: any): boolean {
    console.log(newProps)
    console.log(this.props)

    const childAvatar = this.children.avatar as unknown
    (childAvatar as Block<IAvatar>).setProps({data: {avatar: `https://ya-praktikum.tech/api/v2/resources${newProps.data.avatar}`}})
    
    return false
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
          el.addEventListener(eventName, events[eventName])
        }
      })
    })
  }
}
