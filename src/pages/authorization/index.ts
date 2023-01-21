import { Login } from "./login"
import { Button } from "../../components/button/button"
import { Input } from "../../components/input/input"


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
export const button = new Button(propsButton)

const checkPassword = (password) => {
  if(password.length <= 2) {
    console.log("Error")
  }
}

const handleClick = (e) => {
  checkPassword()
}


const props = {
  data: {
    entry: "Вход",
    registration: "Registration"
  },
  attributes: {
    class: "section"
  },
  events: {
    click: handleClick
  },
  inputLogin: inputLogin,
  inputPassword: inputPassword,
  button: button
}

export const login = new Login(props)
