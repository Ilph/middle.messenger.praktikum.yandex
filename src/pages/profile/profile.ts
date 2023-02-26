//HTML's template
import tpl from "./profile.hbs"

//components's template
import { Block } from "../../utils/Block"

//types
import { IAside } from "../../modules/userProfile/blocks/aside/aside"
import { IAvatar } from "../../modules/userProfile/components/image/avatar"
import { IUserChange } from "../../modules/userProfile/blocks/userChange/userChange"
import { IUserData } from "../../modules/userProfile/blocks/userData/userdata"
import { InputProfile } from "../../modules/userProfile/components/input/input"
import AuthController from "../../controllers/auth-controller"

export interface IProfile {
  aside: Block<IAside>,
  avatar: Block<IAvatar>,
  userData: Block<IUserData>,
  userChange: Block<IUserChange>
}

const userFields = ['email', 'login', 'first_name', 'second_name', 'display_name', 'phone']

export class Profile extends Block<IProfile> {
  constructor(props: IProfile) {
    super("section", props)
    AuthController.fetchUser()
  }

  protected componentDidUpdate(newProps: any): boolean {
    const childAvatar = this.children.avatar as unknown
    (childAvatar as Block<IAvatar>).setProps({data: {avatar: `https://ya-praktikum.tech/api/v2/resources${newProps.data.avatar}`}})

    const childUserData = this.children.userData as unknown
    (childUserData as Block<IUserData>).setProps({data: {login: newProps.data.login}})

    const childInputs = (childUserData as Profile).children.inputs as unknown
    (childInputs as InputProfile[]).forEach((element, i ) => {
      element.setProps({value: newProps.data[userFields[i]]})
    })
    return false
  }

  render() {
    return this.compile(tpl, {})
  }
}
