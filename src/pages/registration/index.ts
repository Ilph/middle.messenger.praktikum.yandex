import { Registration } from "./registration"
import { Input } from "../../components/input/input"
import { Button } from "../../components/button/button"
import { checkInputFocusIn, checkInputFocusOut, checkButtonSubmit } from "../../utils/checkUtilsInput/checkInputs"

const propsInput = {
  email: {
    data: {
      id: "email",
      name: "email",
      type: "email", 
      label: "Email"
    },
    attributes: { 
      class: "input-container input-container_margin",
      },
  },
  login:{
    data: {
      id: "login",
      name: "login",
      type: "text", 
      label: "Login"
    },
    attributes: { 
      class: "input-container input-container_margin",
    },
  },
  firstName: {
    data: {
      id: "firstName",
      name: "first_name",
      type: "text", 
      label: "Имя"
    }, 
    attributes: { 
      class: "input-container input-container_margin",
    },
  },
  secondName: {
    data: {
      id: "secondName",
      name: "secondName",
      type: "text", 
      label: "Фамилия"
    }, 
    attributes: { 
      class: "input-container input-container_margin",
    },
  },
  phone: {
    data: {
      id: "phone",
      name: "phone",
      type: "text", 
      label: "Телефон"
    }, 
    attributes: { 
      class: "input-container input-container_margin",
    },
  },
  password: {
    data: {
      id: "password",
      name: "password",
      type: "password", 
      label: "Password"
    }, 
    attributes: { 
      class: "input-container input-container_margin",
    },
  },
  passwordRepeat: {
    data: {
      id: "passwordRepeat",
      name: "password_repeat",
      type: "password", 
      label: "Passwors (repeat)"
    }, 
    attributes: { 
      class: "input-container input-container_margin",
    },
  },
}

const propsButton = {
  data: {
    value: "Registration"
  },
  attributes: {
    class: "button form-reg__button",
    type: "submit"
  }
}

const email = new Input(propsInput.email)
const login = new Input(propsInput.login)
const firstName = new Input(propsInput.firstName)
const secondName = new Input(propsInput.secondName)
const phone = new Input(propsInput.phone)
const password = new Input(propsInput.password)
const passwordRepeat = new Input(propsInput.passwordRepeat)
const button = new Button(propsButton)

const props = {
  data: {
    entry: "Регистрация",
    signIn: "sign In"
  },
  attributes: {
    class: "section"
  },
  events: {
    focus: checkInputFocusIn,
    blur: checkInputFocusOut,
    click: checkButtonSubmit
  },
  button: button,
  email: email,
  login: login,
  firstName: firstName,
  secondName: secondName,
  phone: phone,
  password: password,
  passwordRepeat: passwordRepeat
}

export const registration = new Registration(props)
