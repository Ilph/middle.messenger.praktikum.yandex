//component's template
import { Profile } from "./profile"

//instances of components
import { aside } from "../../modules/userProfile/blocks/aside/index"
import { avatar } from "../../modules/userProfile/components/image/index"
import { userChange } from "../../modules/userProfile/blocks/userChange/index"
import { userData } from "../../modules/userProfile/blocks/userData/index"

export function profileInstance() {
  const props = {
    attributes: {
      class: "section"
    },
    aside: aside,
    avatar: avatar,
    userData: userData,
    userChange: userChange
  }
  
  return new Profile(props)
}
