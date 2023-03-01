//component's template
import { Profile } from "./profile"
import { connect } from "../../utils/Store/connect"
 
//instances of components
import { aside } from "../../modules/userProfile/blocks/aside/index"
import { avatar } from "../../modules/userProfile/components/image/index"
import { userChange } from "../../modules/userProfile/blocks/userChange/index"
import { userData } from "../../modules/userProfile/blocks/userData/index"

const wrapper = connect((state: any) => {
  return state.user
})
const profile = wrapper(Profile)

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
  return new profile(props)
}
