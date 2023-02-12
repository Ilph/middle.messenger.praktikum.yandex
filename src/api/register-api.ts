import { HTTP } from "../utils/Fetch"
import { BaseAPI } from "./base-api"

const registerAPI = new HTTP("https://ya-praktikum.tech/api/v2")

export class RegisterAPI extends BaseAPI {
  public create(user) {
    return registerAPI.post("/auth/signup", {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: user
    }).then(xhr => xhr.status)
  }
}
