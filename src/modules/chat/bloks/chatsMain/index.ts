import { ChatMain } from "./chatMain"
import { connect } from "../../../../utils/Store/connect"
import MessagesController from "../../../../controllers/messages-controller"
import store from "../../../../utils/Store/store"
import ChatsControllers from "../../../../controllers/chats-controllers"
import { checkMessage } from "../../../../utils/checkUtilsInput/checkInputs"
import avatar from "../../../../../static/icons/iconAvatar.png"

const wrapper = connect((state: any) => {
  return state
})

const chatMainWithStore = wrapper(ChatMain)

function sendMessage(event: MouseEvent) {
  event.preventDefault()
  const input = document.querySelector("#message") as HTMLInputElement
  const message = input!.value
  const newProps = store.getState()
  input.value = ""
  if(!checkMessage(message)) {
    MessagesController.sendMessage(newProps.selectedChat!, message)
  }
}

function deleteChat(event: MouseEvent) {
  event.preventDefault()
  const newProps = store.getState()
  ChatsControllers.deleteChat(newProps.selectedChat)
}
const props = {
  data: {
    avatarChatMain: avatar
  },
  login: "...loading",
  attributes: {
    class: "chat__section"
  },
  messagesInstance: [],
  events: {
    click: [sendMessage, deleteChat]
  }
}

export const chatMain = new chatMainWithStore(props)
