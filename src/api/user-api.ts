import { BaseAPI } from "./base-api"

export interface Profile {
  first_name?: string;
  second_name?: string;
  display_name?: string;
  login?: string;
  email?: string;
  phone?: string;
}

export interface ProfilePassword {
  oldPassword: string,
  newPassword: string,
  repeatePassword: string
}


export class UserAPI extends BaseAPI {
  constructor() {
    super("/user")
  }

  async update(data: Profile | ProfilePassword, endpoint: string) {
    return this.http.put(endpoint, {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: data
    })
    .then(xhr => xhr.response)
  }

  async updateAvatar(form: FormData, endpoint: string) {
    return this.http.put(endpoint, {
      credentials: 'include',
      headers: {
        'content-type': 'multipart/form-data'
      },
      body: form
    })
    .then(xhr => xhr.response)
  }

  create = undefined
  request = undefined
  delete = undefined
}

export default new UserAPI()
