import { HTTP } from "../utils/Fetch"
import { BaseAPI } from "./base-api"

const chatAPIInstance = new HTTP()

class ChatAPI extends BaseAPI {

  create() {
    return chatAPIInstance.post("api/v1/chats", {data: "string"})
  }

  request() {
    return chatAPIInstance.get("api/v1/chats/full")
  }
}
