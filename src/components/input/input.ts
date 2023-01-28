import inputTpl from "./input.hbs"
import { Block } from "../../utils/Block"

export interface IInput {
  [key: string]: string | {
    [key: string]: string 
  }
}

export class Input extends Block<IInput> {
  constructor(props: IInput) {
    super("div", props)
  }

  render() {
    return this.compile(inputTpl, {
      id: this.props.data.id,
      name: this.props.data.name,
      type: this.props.data.type,
      label: this.props.data.label,
      helperText: this.props.data.helperText
    })
  }
}
