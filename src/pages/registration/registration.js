import tpl from "./registration.hbs"
import input from "../../components/input/input.js"
import button from "../../components/button/button.js"


export default () => {
  return tpl(
    {
      entry: "Регистрация",
      email: input({
        inputProps: {
        id: "email",
        name: "email",
        type: "email", 
        placeholder: "Email",
        style: "input_size",
      }}),
      login: input({
        inputProps: {
        id: "login",
        name: "login",
        type: "text", 
        placeholder: "Login",
        style: "input_size",
      }}),
      firstName: input({
        inputProps: {
        id: "login",
        name: "first_name",
        type: "text", 
        placeholder: "Имя",
        style: "input_size",
      }}),
      secondName: input({
        inputProps: {
        id: "name",
        name: "second_name",
        type: "text", 
        placeholder: "Фамилия",
        style: "input_size",
      }}),
      phone: input({
        inputProps: {
        id: "name",
        name: "phone",
        type: "text", 
        placeholder: "Телефон",
        style: "input_size",
      }}),
      password: input({
        inputProps: {
        id: "password",
        name: "password",
        type: "password",
        placeholder: "Password",
        style: "input_size",
      }}),
      passwordRepeat: input({
        inputProps: {
        id: "password",
        name: "password_repeat",
        type: "password",
        placeholder: "Passwors (repeat)",
        style: "input_size",
      }}),
      button: button({value: "Registration", style: "form-reg__buttont"}),
      signIn: "Sign in",
    }
  )
}