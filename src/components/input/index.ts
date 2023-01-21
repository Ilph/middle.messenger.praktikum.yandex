import { Input } from "./input"

const props = {
  login: { 
    attributes: {
    id: "login",
    name: "login",
    type: "text", 
    // placeholder: "Login",
    class: "input input_size",
    autocomplete: "on"
    },
    data: {
      id: "login",
      placeholder: "placeholder"
    }
  },
  password: {
    attributes: {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password",
      class: "input input_size"
    },
    data: {
      id: "password",
      placeholder: "placeholder"
    }
  }
}

export const inputLogin = new Input(props.login)
export const inputPassword= new Input(props.password)
