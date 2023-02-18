import { Avatar } from "./avatar"
import { createModal } from "../../utils/createModalWindow"

function modalWindow(event: MouseEvent) {
  event.preventDefault()
  createModal("input")
}

const props = {
  attributes: {
    class: "avatar"
  },
   events: {
     click: modalWindow
   }
}

export const avatar = new Avatar(props)
export const avatarProfileData = new Avatar(props)
export const avatarProfilePassword = new Avatar(props)
