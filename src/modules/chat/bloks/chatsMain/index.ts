import { ChatMain } from "./chatMain"
import { connect } from "../../../../utils/Store/connect"
import MessagesController from "../../../../controllers/messages-controller"
import store from "../../../../utils/Store/store"
import ChatsControllers from "../../../../controllers/chats-controllers"
import { checkMessage } from "../../../../utils/checkUtilsInput/checkInputs"
import avatar from "../../../../../static/icons/iconAvatar.png"
import { modalWindowAddUser, modalWindowDeleteUser, modalWindowAddChat, modalWindowAddAvatarChat } from "../../../userProfile/modalWindows/index"
import { upLoad } from "../../../userProfile/utils/upLoad"

const wrapper = connect((state: any) => {
  if(state.user) {
    return {
      ...state,
      data: {
        avatarChatMain: `https://ya-praktikum.tech/api/v2/resources${state.user.data.avatar}`,
        login: state.user.data.login
      }
    }
  }
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

function addUser(event: MouseEvent) {
  event.preventDefault()
  const modal = document.querySelector("#modal") as HTMLElement
  modal.appendChild(modalWindowAddUser.getContent()!)
  modal.classList.add("open")
}

function deleteUser(event: MouseEvent) {
  event.preventDefault()
  const modal = document.querySelector("#modal") as HTMLElement
  modal.appendChild(modalWindowDeleteUser.getContent()!)
  modal.classList.add("open")
}

function addChat(event: MouseEvent) {
  event.preventDefault()
  const modal = document.querySelector("#modal") as HTMLElement
  modal.appendChild(modalWindowAddChat.getContent()!)
  modal.classList.add("open")
}

function addAvatarToChat(event: MouseEvent) {
  event.preventDefault()
  const modal = document.querySelector("#modal") as HTMLElement
  modal.appendChild(modalWindowAddAvatarChat.getContent()!)
  modal.classList.add("open")
  upLoad()
}

const props = {
  data: {
    avatarChatMain: avatar,
    login: "...loading"
  },
  attributes: {
    class: "chat__section"
  },
  messagesInstance: [],
  events: {
    click: [sendMessage, deleteChat, addUser, deleteUser, addChat, addAvatarToChat]
  }
}

export const chatMain = new chatMainWithStore(props)
