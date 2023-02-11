import { HTTP } from "../utils/Fetch"
import { BaseAPI } from "./base-api"

const chatMessagesAPIInstance = new HTTP()

class ChatMessagesAPI extends BaseAPI {

  request() {
    return chatMessagesAPIInstance.get(`api/v1/messages/${id}`)
  }
}
