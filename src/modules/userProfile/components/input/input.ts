import tpl from "./input.hbs"
import { Block } from "../../../../utils/Block"

export interface IInputProfile {
  data?: {
    idName?: string,
    name: string,
    nameInput: string,
    types: string,
    disabled: string,
    value?: string
  },
  value?: string
}

export class InputProfile extends Block<IInputProfile> {
  constructor(props: IInputProfile) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {
      idName: this.props.data.idName,
      names: this.props.data.name,
      nameInput: this.props.data.nameInput,
      types: this.props.data.types,
      helperText: this.props.data.helperText,
      disabled: this.props.data.disabled,
      value: this.props.value ?? this.props.data.value,
      placeholder: this.props.data.placeholder
    })
  }
}
