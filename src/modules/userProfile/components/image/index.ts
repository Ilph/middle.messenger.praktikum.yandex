import { Avatar } from "./avatar"
import ava from "../../../../../static/icons/iconAvatar.png"

const props = {
  attributes: {
    class: "avatar"
  },
  data: {
    avatar: ava
  }
}

export const avatar = new Avatar(props)
export const avatarProfileData = new Avatar(props)
export const avatarProfilePassword = new Avatar(props)
