import tpl from "./login.hbs"

import input from "../../components/input/input"
import button from "../../components/button/button"

export default () => {

  const optionsBtn = {
    value: "Sign in", 
    style: "form-auth__buttont"
  }

  const optionsInp = {
    login: {
      id: "login",
      name: "login",
      type: "text", 
      placeholder: "Login",
      style: "input_size",
    },
    password: {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password",
      style: "input_size",
    }
  }
  
  return tpl(
    {
      entry: "Вход",
      inputLogin: input(optionsInp.login),
      inputPassword: input(optionsInp.password),
      button: button(optionsBtn),
      registration: "Registration",
    }
  )
}
