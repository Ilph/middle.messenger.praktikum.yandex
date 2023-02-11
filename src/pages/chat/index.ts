//Components
import { chatAside } from "../../modules/chat/bloks/chatsAside/index"
import { chatMain} from "../../modules/chat/bloks/chatsMain/index"
import { Chat } from "./chat"

export function chatInstance() {
  const propsData = {
    chatAside: chatAside,
    chatMain: chatMain
  }

  return new Chat(propsData)
}


