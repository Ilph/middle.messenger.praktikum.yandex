import tpl from "./input.hbs"
import { Block } from "../../../../utils/Block"
// import store, { StoreEvents } from "../../../../utils/Store/store"

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

    // store.on(StoreEvents.Updated, () => {
    //    this.setProps(store.getState())
    //    console.log(this.props.user.login)
    // })
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
