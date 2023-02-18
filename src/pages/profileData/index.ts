//component's template
import { ProfileData } from "./profileData"
import { Button } from "../../components/button/button"
import { connect } from "../../utils/Store/connect"
//instances of components
import { asideProfileData } from "../../modules/userProfile/blocks/aside/index"
import { avatarProfileData } from "../../modules/userProfile/components/image/index"
import { userDataProfileData } from "../../modules/userProfile/blocks/userData/index"
//utils
import {
  checkInputFocusIn,
  checkInputFocusOut,
  getDataInput
} from "../../utils/checkUtilsInput/checkInputs"

import UserController from "../../controllers/user-controllers"

export function profileDataInstance() {
  const buttonProps = {
    data: {
      value: "Сохранить"
    },
    attributes: {
      class: "button"
    },
    events: {
      click: (event: MouseEvent) => {
        event.preventDefault()
        const data = getDataInput()
        UserController.changeUserData(data)
      }
    }
  }
  
  const button = new Button(buttonProps)

const wrapper = connect((state: any) => state.user)
const profileData = wrapper(ProfileData)
  
  const props = {
    attributes: {
      class: "section"
    },
    events: {
      focus: checkInputFocusIn,
      blur: checkInputFocusOut
    },
    aside: asideProfileData,
    avatar: avatarProfileData,
    userData: userDataProfileData,
    save: button
  }
  
  return new profileData(props)
}
