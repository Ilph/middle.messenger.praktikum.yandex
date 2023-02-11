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
  checkButtonSubmit
} from "../../utils/checkUtilsInput/checkInputs"

const propsInputProfilepassword = {
  oldPassword: {
    data: {
      id: "oldPassword",
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
      id: "newPassword",
      name: "Новый пароль",
      nameInput: "new_password",
      types: "password",
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
      id: "repeatPassword",
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
      console.log("Ok")
    }
  }
}

const button = new Button(buttonProps)

export function profilePasswordInstance() {
  const props = {
    attributes: {
      class: "section"
    },
    events: {
      focus: checkInputFocusIn,
      blur: checkInputFocusOut,
      click: checkButtonSubmit
    },
    aside: asideProfilePassword,
    avatar: avatarProfilePassword,
    oldPassword: oldPassword,
    newPassword: newPassword,
    repeatNewPassword: repeatNewPassword,
    save: button
  }
  
  return new ProfilePassword(props)
}
