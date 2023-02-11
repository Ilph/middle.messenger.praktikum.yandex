//Components
import { Login } from "./login"
import { Button } from "../../components/button/button"
import { Input } from "../../components/input/input"
//Utils
import {
  checkInputFocusIn,
  checkInputFocusOut,
  getDataInput
} from "../../utils/checkUtilsInput/checkInputs"
//controllers
import { UserLoginController } from "../../controllers/user-Login"
//Router
import { router } from "../../index"


export function loginInstance() {
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
      type: "submit",
      "data-handler": "signin"
    },
    events: {
      click: (event: MouseEvent) => {
        event.preventDefault()
        const data = getDataInput()
        const userLoginController = new UserLoginController()
        userLoginController.login(data)
      }
    }
  }
  
  const propsButton2 = {  
    data: {
      value: "Зарегистрироваться"
    }, 
    attributes: {
      class: "button form-auth__button form-auth__button_secondcolor",
      type: "submit",
      "data-handler": "changepage"
    },
    events: {
      click: (event: MouseEvent) => {
        event.preventDefault()
        router.go("/sign-up")
      }
    }
  }
  
  const inputLogin = new Input(propsInput.login)
  const inputPassword = new Input(propsInput.password)
  const button = new Button(propsButton)
  const button2 = new Button(propsButton2)
  

  
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
    },
    inputs: [inputLogin, inputPassword],
    button: [button, button2]
  }
  
  return new Login(props)
}
