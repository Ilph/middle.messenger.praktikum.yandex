import API, { ChatsAPI } from "../api/chat-api"
import store from "../utils/Store/store"
import MessagesController from "./messages-controller"

class ChatsController {
  private readonly api: ChatsAPI

  constructor() {
    this.api = API
  }

  async addChat(title: string) {
    await this.api.addChat(title)
    this.fetchChats()
  }

  async fetchChats() {
    const chats = await this.api.request()

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id)
      await MessagesController.connect(chat.id, token.token)
    })
    store.set("chats", chats)
  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId])
  }

  deleteUserToChat(id: number, userId: number) {
    this.api.deleteUsers(id, [userId])
  }

  async deleteChat(id: number) {
    await this.api.deleteChat(id)
    this.fetchChats()
  }

  async addAvatarToChat(form: FormData) {
    try {
      await this.api.addAvatar(form)
      this.fetchChats()
    } catch(e) {
      console.log(e.message)
    }
  }

  getToken(id: number) {
    return this.api.getToken(id)
  }

  selectChat(id: number) {
    store.set('selectedChat', id)
  }
}

export default new ChatsController()
