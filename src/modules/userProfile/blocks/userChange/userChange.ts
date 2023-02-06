import tpl from "./userChange.hbs"
import { Block } from "../../../../utils/Block"

export interface IUserChange {
  data: {
    changeData: string,
    changePassword: string,
    exite: string
  },
  attributes: {
    class: string
  }
}

export class UserChanges extends Block<IUserChange> {
  constructor(props: IUserChange) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {
      changeData: this.props.data.changeData,
      changePassword: this.props.data.changePassword,
      exite: this.props.data.exite
    })
  }
}
