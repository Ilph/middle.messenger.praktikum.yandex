import {BaseAPI} from "./base-api"
import { User } from "./auth-api"

export interface ChatInfo {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User,
    time: string;
    content: string;
  }
}

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats')
  }

  addChat(title: string) {
    return this.http.post('/', {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: {"title": title}
    })
    .then(xhr => xhr.response)
  }

  deleteChat(id: number): Promise<unknown> {
    return this.http.delete('/', {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: { 
        chatId: id
      }
    })
  }

  request(): Promise<ChatInfo[]> {
    return this.http.get('/', {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(xhr => xhr.response)
  }

  getUsers(id: number): Promise<unknown> {
    return this.http.get(`/${id}/users`)
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.put('/users', {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        users, 
        chatId: id
      }
    })
  }

  deleteUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.delete('/users', {
      credentials: "include",
      headers: {
        "content-type": "application/json"
      },
      body: {
        users, 
        chatId: id
      }
    })
    .then(xhr => xhr.response)
  }

  addAvatar(form: FormData) {
    return this.http.put("/avatar", {
      credentials: "include",
      avatar: true,
      body: form
    })
    .then(xhr => xhr)
  }

  async getToken(id: number): Promise<any> {
    return this.http.post(`/token/${id}`, {
      credentials: 'include'
    })
    .then(xhr => xhr.response)
  }
  create = undefined
  delete = undefined
  update = undefined
}

export default new ChatsAPI()
