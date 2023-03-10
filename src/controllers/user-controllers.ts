import API, { UserAPI, Profile, ProfilePassword } from "../api/user-api"
import router from "../utils/Router/Router"
import { checkLogin,
         checkPassword,
         checkEmail,
         checkName,
         checkPhone
} from "../utils/checkUtilsInput/checkInputs"
import store from "../utils/Store/store"

export class UserController {
  private readonly api: UserAPI

  constructor() {
    this.api = API;
  }

  async changeUserData(data: Profile) {
    try {
      if(!checkLogin(data.login!) && 
      !checkEmail(data.email!) &&
      !checkName(data.first_name!) &&
      !checkName(data.second_name!) &&
      !checkPhone(data.phone!)
      ) {
        throw new Error("Некорректные данные")
      }
      const profile = await this.api.update(data, "/profile")
      store.set("user.data", profile)
      router.go("/settings")
    } catch (e: any) {
      console.error(e.message)
    }
  }

  async changeUserPassword(data: ProfilePassword) {
    try {
      if(!checkPassword(data.oldPassword!) && 
      !checkPassword(data.newPassword!)
      ) {
        throw new Error("Некорректные данные")
      }
      await this.api.update(data, "/password")
      router.go("/settings")
    } catch (e: any) {
      console.error(e.message)
    }
  }

  async changeUserAvatar(form: FormData) {
    try {
      const avatar = await this.api.updateAvatar(form, "/profile/avatar")
      store.set("user.data.avatar", avatar)
    } catch (e: any) {
      console.error(e.message)
    }
  }
}

export default new UserController()
