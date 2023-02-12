import { RegisterAPI } from "../api/register-api"
import { router } from "../index"
import { checkLogin, checkPassword, checkEmail, checkName, checkPhone} from "../utils/checkUtilsInput/checkInputs"

const registerAPI = new RegisterAPI()

interface RegistartionFormModel {
  login?: string,
  password?: string,
  repeatePassword?: string,
  email?: string,
  firstName?: string,
  secondName?: string,
  phone?: string
}

export class UserRegistration {
  public registration(data: RegistartionFormModel) {
    try {

      if(!checkLogin(data.login!) && 
      !checkPassword(data.password!) &&
      !checkPassword(data.repeatePassword!) &&
      !checkEmail(data.email!) &&
      !checkName(data.firstName!) &&
      !checkName(data.secondName!) &&
      !checkPhone(data.phone!)
      ) {
        throw new Error("Некорректные данные")
      }

      registerAPI.create(JSON.stringify(data)).then((status) => {
        if(status !== 200) {
          throw new Error("error")
        } else {
          console.log("Create user")
        }
        router.go("/messenger")
      })
    } catch(error) {
      console.log(error)
    }
  }
}
