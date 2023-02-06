//Components
import { Login } from "./login"
import { Button } from "../../components/button/button"
import { Input } from "../../components/input/input"
//Utils
import {
  checkInputFocusIn,
  checkInputFocusOut,
  checkButtonSubmit
} from "../../utils/checkUtilsInput/checkInputs"


const propsInput = {
  login: { 
    attributes: { 
    class: "input-container input-container_margin",
    },
    data: {
      id: "login",
      name: "login",
      type: "text",
      label: "Login",
      helperText: "Неверный логин"
    }
  },
  password: {
    attributes: {
      class: "input-container",
    },
    data: {
      id: "password",
      name: "password",
      type: "password",
      label: "Password",
      helperText: "Неверный пароль"
    }
  }
}

const propsButton = {
  data: {
    value: "sign in"
  }, 
  attributes: {
    class: "button form-auth__button",
    type: "submit"
  }
}

const inputLogin = new Input(propsInput.login)
const inputPassword = new Input(propsInput.password)
const button = new Button(propsButton)

const props = {
  data: {
    entry: "Вход",
    registration: "Registration"
  },
  attributes: {
    class: "section"
  },
  events: {
    focus: checkInputFocusIn,
    blur: checkInputFocusOut,
    click: checkButtonSubmit
  },
  inputs: [inputLogin, inputPassword],
  button: button
}

export const login = new Login(props)
