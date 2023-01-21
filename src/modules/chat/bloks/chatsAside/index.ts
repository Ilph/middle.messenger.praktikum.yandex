import { ChatAside } from "./chatsAside"
import { chat, chat2 } from "../../component/chat/index"

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
      if((event.target! as HTMLElement).getAttribute("type")) {
        console.log(event.target)
      }
    }
  }
}

export const chatAside = new ChatAside(props)
