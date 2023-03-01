//Component's template
import { ProfilePassword } from "./profilePassword"
import { Button } from "../../components/button/button"
import { InputProfile } from "../../modules/userProfile/components/input/input"
//Instances of components
import { asideProfilePassword } from  "../../modules/userProfile/blocks/aside/index"
import { avatarProfilePassword } from  "../../modules/userProfile/components/image/index"
//utils
import {
  checkInputFocusIn,
  checkInputFocusOut,
  getDataInput
} from "../../utils/checkUtilsInput/checkInputs"
import UserController from "../../controllers/user-controllers"
import { connect } from "../../utils/Store/connect"

const propsInputProfilepassword = {
  oldPassword: {
    data: {
      idName: "oldPassword",
      name: "Старый пароль",
      nameInput: "old_password",
      types: "password",
      placeholder: "password",
      disabled: "",
      helperText: "Неверный пароль"
    },
    attributes: {
      class: "label-container",
    }
  },
  newPassword: {
    data: {
      idName: "newPassword",
      name: "Новый пароль",
      nameInput: "new_password",
      types: "password",
      value: "",
      placeholder: "password",
      disabled: "",
      helperText: "Неверный пароль"
    },
    attributes: {
      class: "label-container",
    }
  },
  repeatNewPassword: {
    data: {
      idName: "repeatPassword",
      name: "Повторите новый пароль",
      nameInput: "repeate_password",
      types: "password",
      placeholder: "password",
      disabled: "",
      helperText: "Неверный пароль"
    },
    attributes: {
      class: "label-container",
    }
  }
}

const oldPassword = new InputProfile(propsInputProfilepassword.oldPassword)
const newPassword = new InputProfile(propsInputProfilepassword.newPassword)
const repeatNewPassword = new InputProfile(propsInputProfilepassword.repeatNewPassword)

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
      UserController.changeUserPassword(data)
    }
  }
}

const button = new Button(buttonProps)

const wrapper = connect((state: any) => state.user)
const profileData = wrapper(ProfilePassword)

export function profilePasswordInstance() {
  const props = {
    attributes: {
      class: "section"
    },
    events: {
      focus: checkInputFocusIn,
      blur: checkInputFocusOut
    },
    aside: asideProfilePassword,
    avatar: avatarProfilePassword,
    oldPassword: oldPassword,
    newPassword: newPassword,
    repeatNewPassword: repeatNewPassword,
    save: button
  }
  
  return new profileData(props)
}
