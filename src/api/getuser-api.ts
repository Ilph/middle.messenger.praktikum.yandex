import { HTTP } from "../utils/Fetch"
import { BaseAPI } from "./base-api"

const getUserAPIInstance = new HTTP("https://ya-praktikum.tech/api/v2")

export class GetUserAPI extends BaseAPI {
  public request() {
    return getUserAPIInstance.get("/auth/user", {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(xhr => xhr.response)
  }
}
