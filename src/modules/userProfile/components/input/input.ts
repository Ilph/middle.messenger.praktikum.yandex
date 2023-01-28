import tpl from "./input.hbs"
import { Block } from "../../../../utils/Block"

export interface IInputProfile {
  data: {
    name: string,
    nameInput: string,
    types: string,
    placeholder: string,
    disabled: string
  }
}

export class InputProfile extends Block<IInputProfile> {
  constructor(props: IInputProfile) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {
      id: this.props.data.id,
      names: this.props.data.name,
      nameInput: this.props.data.nameInput,
      types: this.props.data.types,
      placeholder: this.props.data.placeholder,
      helperText: this.props.data.helperText,
      disabled: this.props.data.disabled
    })
  }
}
