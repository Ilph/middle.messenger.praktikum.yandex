import { ChatAside } from "./chatsAside"
import { chat } from "../../component/chat/index"
import { router } from "../../../../index"


const props = {
  attributes: {
    class: "chat__aside"
  },
  data: {
    profile: "Профиль",
  },
  Chat: chat,
  events: {
    click: (event: MouseEvent) => {
      event.preventDefault()
      router.go("/settings")
    }
  }
}

export const chatAside = new ChatAside(props)
