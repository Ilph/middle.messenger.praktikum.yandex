//component's template
import { ProfileData } from "./profileData"
import { Button } from "../../components/button/button"
//instances of components
import { asideProfileData } from "../../modules/userProfile/blocks/aside/index"
import { avatarProfileData } from "../../modules/userProfile/components/image/index"
import { userDataProfileData } from "../../modules/userProfile/blocks/userData/index"
//utils
import {
  checkInputFocusIn,
  checkInputFocusOut,
  checkButtonSubmit
} from "../../utils/checkUtilsInput/checkInputs"

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
        console.log("Ok")
      }
    }
  }
  
  const button = new Button(buttonProps)
  
  const props = {
    attributes: {
      class: "section"
    },
    events: {
      focus: checkInputFocusIn,
      blur: checkInputFocusOut,
      click: checkButtonSubmit
    },
    aside: asideProfileData,
    avatar: avatarProfileData,
    userData: userDataProfileData,
    save: button
  }
  
  return new ProfileData(props)
}
