import tpl from "./login.hbs"
import { Block } from "../../utils/Block"
import { IButton } from "../../components/button/button"


interface ILogin {
  data: {
    entry: string;
    registration: string
  },
  attributes: {
    class: string
  },
  inputLogin: inputLogin;
  inputPassword: inputPassword;
  button: IButton
}

export class Login extends Block<ILogin> {
  constructor(props: ILogin) {
    super("section", props)
  }

  render() {
    return this.compile(tpl, {
      entry: this.props.data.entry,
      registration: this.props.data.registration
    })
  }
}

