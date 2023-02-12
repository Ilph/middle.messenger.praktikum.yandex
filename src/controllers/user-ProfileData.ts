import { GetUserAPI } from "../api/getuser-api"
import store from "../utils/Store/store"

const getUserAPI = new GetUserAPI()

export class UserProfileDataController {
  public getProfileData() {
   getUserAPI.request()
    .then(data => {
      store.set("user", JSON.parse(data))
    })
  }
}
