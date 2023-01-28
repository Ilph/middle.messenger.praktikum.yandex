//HTML's template
import tpl from "./profile.hbs"

//components's template
import { Block } from "../../utils/Block"

//types
import { IAside } from "../../modules/userProfile/blocks/aside/aside"
import { IAvatar } from "../../modules/userProfile/components/image/avatar"
import { IUserChange } from "../../modules/userProfile/blocks/userChange/userChange"
import { IUserData } from "../../modules/userProfile/blocks/userData/userdata"

interface IProfile {
  aside: Block<IAside>,
  avatar: Block<IAvatar>,
  userData: Block<IUserData>,
  userChange: Block<IUserChange>
}

export class Profile extends Block<IProfile> {
  constructor(props: IProfile) {
    super("section", props)
  }

  render() {
    return this.compile(tpl, {})
  }
}
