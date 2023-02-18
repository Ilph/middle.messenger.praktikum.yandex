import { ChatAside } from "./chatsAside"
import router from "../../../../utils/Router/Router"
import { connect } from "../../../../utils/Store/connect"

const wrapper = connect((state: any) => state)
const chatAsideWithStore = wrapper(ChatAside)


const props = {
  attributes: {
    class: "chat__aside"
  },
  data: {
    profile: "Профиль",
  },
  chats: [],
  events: {
    click: (event: MouseEvent) => {
      event.preventDefault()
      router.go("/settings")
    }
  }
}

export const chatAside = new chatAsideWithStore(props)
