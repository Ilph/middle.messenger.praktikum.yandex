//Components
import { chatAside } from "../../modules/chat/bloks/chatsAside/index"
import { chatMain} from "../../modules/chat/bloks/chatsMain/index"
import { ChatPage } from "./chat"
import { connect } from "../../utils/Store/connect"

const wrapper = connect((state: any) => state)
const chatWithStore = wrapper(ChatPage)

export function chatInstance() {
  const propsData = {
    chatAside: chatAside,
    chatMain: chatMain
  }
  return new chatWithStore(propsData)
}
