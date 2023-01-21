import { Login } from "./login"
import { button } from "../../components/button/index"
import { inputLogin, inputPassword} from "../../components/input/index"

const props = {
  data: {
    entry: "Вход",
    registration: "Registration"
  },
  attributes: {
    class: "section"
  },
  inputLogin: inputLogin,
  inputPassword: inputPassword,
  button: button
}

export const login = new Login(props)
