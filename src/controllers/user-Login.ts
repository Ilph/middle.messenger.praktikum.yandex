import { LoginAPI } from "../api/login-api"
import { router } from "../index"
import { checkLogin, checkPassword} from "../utils/checkUtilsInput/checkInputs"

interface LoginFormModel {
  login?: string,
  password?: string
}

const loginAPI = new LoginAPI()

export class UserLoginController {
  public login(data: LoginFormModel) {
    try {
      if(!checkLogin(data.login!) && !checkPassword(data.password!)) {
        throw new Error("Некорректный логин или пароль")
      }
      
      loginAPI.request(JSON.stringify(data)).then((status) => {
        if(status !== 200) {
          throw new Error("error")
        }
        router.go("/messenger")
      })

    } catch (error) {
      console.log(error)
    }
  }
}
