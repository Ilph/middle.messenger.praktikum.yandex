//HTML's templates
import tpl from "./userdata.hbs"
//Component templates
import { Block } from "../../../../utils/Block"
//type
import { IInputProfile } from "../../components/input/input"

export interface IUserData {
  [key: string]: Block<IInputProfile>[] | {
    [key: string]: string
  }
}

export class UserData extends Block<IUserData> {
  constructor(props: IUserData) {
    super("div", props)
  }

  render() {
    return this.compile(tpl, {
      login: this.props.data.login
    })
  }
}
