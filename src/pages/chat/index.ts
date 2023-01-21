import { chatAside } from "../../modules/chat/bloks/chatsAside/index"
import { chatMain} from "../../modules/chat/bloks/chatsMain/index"
import {Chat} from "./chat"

const propsData = {
  chatAside: chatAside,
  chatMain: chatMain
}

export const chat = new Chat(propsData)
