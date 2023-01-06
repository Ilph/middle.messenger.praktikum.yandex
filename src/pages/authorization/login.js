import tpl from "./login.hbs"
import input from "../../components/input/input.js"
import button from "../../components/button/button.js"


export default () => {
  return tpl(
    {
      entry: "Вход",
      inputLogin: input({
        inputProps: {
        id: "login",
        name: "login",
        type: "text", 
        placeholder: "Login",
        style: "input_size",
      }}),
      inputPassword: input({
        inputProps: {
        id: "password",
        name: "password",
        type: "password",
        placeholder: "Password",
        style: "input_size",
      }}),
      button: button({value: "Sign in", style: "form-auth__buttont"}),
      registration: "Registration",
    }
  )
}