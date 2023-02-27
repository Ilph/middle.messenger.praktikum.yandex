import { Avatar } from "./avatar"
import { connect } from "../../../../utils/Store/connect"
import ava from "../../../../../static/icons/iconAvatar.png"
import { modalWindowAvatar } from "../../modalWindows/index"
import { upLoad } from "../../utils/upLoad"

function modalwindow(event: MouseEvent) {
  event.preventDefault()
  const modal = document.querySelector("#modal") as HTMLElement
  modal.appendChild(modalWindowAvatar.getContent()!)
  modal.classList.add("open")
  upLoad()
}

const props = {
  attributes: {
    class: "avatar"
  },
  data: {
    avatar: ava
  },
  events: {
    click: modalwindow
  }
}
const wrapper = connect((state: any) => {
  if(state.user) {
     return {data: {avatar: `https://ya-praktikum.tech/api/v2/resources${state.user.data.avatar}`}}
  }
})
const avatarWithStore = wrapper(Avatar)

export const avatar = new avatarWithStore(props)
export const avatarProfileData = new avatarWithStore(props)
export const avatarProfilePassword = new avatarWithStore(props)
