import tpl from "./registration.hbs"

import input from "../../components/input/input"
import button from "../../components/button/button"


export default () => {

  const optionsTotal = {
    email: {
      id: "email",
      name: "email",
      type: "email", 
      placeholder: "Email",
      style: "input_size",
    },
    login:{
      id: "login",
      name: "login",
      type: "text", 
      placeholder: "Login",
      style: "input_size",
    },
    firstName: {
        id: "firstName",
        name: "first_name",
        type: "text", 
        placeholder: "Имя",
        style: "input_size",
      },
    secondName: {
      id: "secondName",
      name: "second_name",
      type: "text", 
      placeholder: "Фамилия",
      style: "input_size",
    },
    phone: {
      id: "phone",
      name: "phone",
      type: "text", 
      placeholder: "Телефон",
      style: "input_size",
    },
    password: {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password",
      style: "input_size",
    },
    passwordRepeat: {
      id: "passwordRepeat",
      name: "password_repeat",
      type: "password",
      placeholder: "Passwors (repeat)",
      style: "input_size",
    }
  }
  
  const buttonOpt = {
    value: "Registration", 
    style: "form-reg__buttont"
  }


  return tpl(
    {
      entry: "Регистрация",
      email: input(optionsTotal.email),
      login: input(optionsTotal.login),
      firstName: input(optionsTotal.firstName),
      secondName: input(optionsTotal.secondName),
      phone: input(optionsTotal.phone),
      password: input(optionsTotal.password),
      passwordRepeat: input(optionsTotal.passwordRepeat),
      button: button(buttonOpt),
      signIn: "Sign in",
    }
  )
}
