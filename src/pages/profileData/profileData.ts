//HTML's template
import tpl from "./profileData.hbs"

//components's template
import { Block } from "../../utils/Block"

//types
import { IAside } from "../../modules/userProfile/blocks/aside/aside"
import { IAvatar } from "../../modules/userProfile/components/image/avatar"
import { IUserData } from "../../modules/userProfile/blocks/userData/userdata"
import { IButton } from "../../components/button/button"
import { InputProfile } from "../../modules/userProfile/components/input/input"

import AuthController from "../../controllers/auth-controller"

export interface IProfileData {
  aside: Block<IAside>,
  avatar: Block<IAvatar>,
  userData: Block<IUserData>,
  save: Block<IButton>
}

const userFields = ['email', 'login', 'first_name', 'second_name', 'display_name', 'phone']

export class ProfileData extends Block<IProfileData> {
  constructor(props: IProfileData) {
    super("section", props)
    AuthController.fetchUser()
  }

  protected componentDidUpdate(newProps: any): boolean {

    const childUserData = this.children.userData as unknown
    const childInputs = (childUserData as ProfileData).children.inputs as unknown
    
    (childInputs as InputProfile[]).forEach((element, i ) => {
      element.setProps({placeholder: newProps.data[userFields[i]]})
    })

    return false
  }

  render() {
    return this.compile(tpl, {})
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
