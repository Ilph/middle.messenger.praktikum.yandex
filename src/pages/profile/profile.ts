//HTML's template
import tpl from "./profile.hbs"

//components's template
import { Block } from "../../utils/Block"

//types
import { IAside } from "../../modules/userProfile/blocks/aside/aside"
import { IAvatar } from "../../modules/userProfile/components/image/avatar"
import { IUserChange } from "../../modules/userProfile/blocks/userChange/userChange"
import { IUserData } from "../../modules/userProfile/blocks/userData/userdata"
import { UserProfileDataController } from "../../controllers/user-ProfileData"

const userProfileDataController = new UserProfileDataController()

export interface IProfile {
  aside: Block<IAside>,
  avatar: Block<IAvatar>,
  userData: Block<IUserData>,
  userChange: Block<IUserChange>
}

export class Profile extends Block<IProfile> {
  constructor(props: IProfile) {
    super("section", props)
    console.log(this.props)
    
    userProfileDataController.getProfileData()
  }

  render() {
    return this.compile(tpl, {
      text: "TestText"
    })
  }
}
