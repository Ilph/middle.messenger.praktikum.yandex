import { HTTP } from "../utils/Fetch"
import { BaseAPI } from "./base-api"

const authAPIInstance = new HTTP("https://ya-praktikum.tech/api/v2")

export class LoginAPI extends BaseAPI {
  public request(user) {
    return authAPIInstance.post("/auth/signin", {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: user
    })
    .then(xhr => xhr.status)
  }
}
