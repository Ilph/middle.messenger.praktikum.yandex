import API, { AuthAPI, SigninData, SignupData } from "../api/auth-api"
import store from "../utils/Store/store"
import router from "../utils/Router/Router"
import { checkLogin, checkPassword, checkEmail, checkName, checkPhone} from "../utils/checkUtilsInput/checkInputs"

export class AuthController {
  private readonly api: AuthAPI

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData) {
    try {

      if(!checkLogin(data.login!) && !checkPassword(data.password!)) {
        throw new Error("Некорректный логин или пароль")
      }

     const response = await this.api.signin(data)
     if(response !== 200) {
       router.go("/")
       return
     }
      await this.fetchUser()
      router.go("/messenger")
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: SignupData) {
    try {

      if(!checkLogin(data.login!) && 
      !checkPassword(data.password!) &&
      !checkEmail(data.email!) &&
      !checkName(data.first_name!) &&
      !checkName(data.second_name!) &&
      !checkPhone(data.phone!)
      ) {
        throw new Error("Некорректные данные")
      }

      const response = await this.api.signup(data)
      if(response !== 200) {
        router.go("/")
        return
      }
      await this.fetchUser()
      router.go("/messenger")
    } catch (e: any) {
      console.error(e.message)
    }
  }

  async fetchUser() {
    const user = await this.api.read()
    store.set("user.data", user)
  }

  async logout() {
    try {
      await this.api.logout()
      router.go("/")
    } catch (e: any) {
      console.error(e.message)
    }
  }
}

export default new AuthController()
