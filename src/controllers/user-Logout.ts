import { LogoutAPI } from "../api/logout-api"
import { router } from "../index"

const logoutAPI = new LogoutAPI()

export class UserLogoutController {
  public logout() {
    try {
      logoutAPI.request().then((status) => {
        if(status !== 200) {
          throw new Error("error")
        } else {
          router.go("/")
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
