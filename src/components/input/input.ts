import inputTpl from "./input.hbs"
import { Block } from "../../utils/Block"

export class Input extends Block<IInput> {
  constructor(props) {
    super("input", props)
  }

  render() {
    return this.compile(inputTpl, {
      id: this.props.data.id,
      placeholder: this.props.data.placeholder
    })
  }
}
