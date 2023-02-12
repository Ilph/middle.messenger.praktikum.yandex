import { HTTP } from "../utils/Fetch"
import { BaseAPI } from "./base-api"

const outAPIInstance = new HTTP("https://ya-praktikum.tech/api/v2")

export class LogoutAPI extends BaseAPI {
  public request() {
    return outAPIInstance.post("/auth/logout", {
      credentials: 'include'
    })
    .then(xhr => xhr.status)
  }
}
