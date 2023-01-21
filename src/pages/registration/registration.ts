import tpl from "./registration.hbs"
import { Block } from "../../utils/Block"

interface IRegistration {

}

export class Registration extends Block<IRegistration> {
  constructor(props: IRegistration) {
    super("section", props)
  }

  render() {
    return this.compile(tpl, {
      entry: this.props.data.entry,
      signIn: this.props.data.signIn
    })
  }
}
