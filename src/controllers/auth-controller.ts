import API, { AuthAPI, SigninData, SignupData } from "../api/auth-api"
import store from "../utils/Store/store"
import router from "../utils/Router/Router"
import { checkLogin,
         checkPassword,
         checkEmail,
         checkName,
         checkPhone
} from "../utils/checkUtilsInput/checkInputs"

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
      console.error(e)
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
      throw new Error(e.message)
    }
  }

  async fetchUser() {
    try {
      const xhr = await this.api.read()
      if(xhr.status !== 200 ) {
        throw new Error(JSON.stringify(xhr.response))
      }
      const user = xhr.response
      store.set("user.data", user)
    } catch(e) {
      throw new Error(e.message)
    }
  }

  async logout() {
    try {
      await this.api.logout()
      router.go("/")
    } catch (e: any) {
      throw new Error(e.message)
    }
  }
}

export default new AuthController()
