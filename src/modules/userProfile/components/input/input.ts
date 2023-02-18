import tpl from "./input.hbs"
import { Block } from "../../../../utils/Block"

export interface IInputProfile {
  data?: {
    idName?: string,
    name: string,
    nameInput: string,
    types: string,
    placeholder: string,
    disabled: string
  },
  placeholder?: string
}

export class InputProfile extends Block<IInputProfile> {
  constructor(props: IInputProfile) {
    super("div", props)
  }

  setProps = (nextProps:IInputProfile) => {
    if(!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  render() {
    return this.compile(tpl, {
      idName: this.props.data.idName,
      names: this.props.data.name,
      nameInput: this.props.data.nameInput,
      types: this.props.data.types,
      placeholder: this.props.placeholder ?? this.props.data.placeholder,
      helperText: this.props.data.helperText,
      disabled: this.props.data.disabled
    })
  }
}
