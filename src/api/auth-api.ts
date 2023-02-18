import { BaseAPI } from "./base-api"

export interface SigninData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export class AuthAPI extends BaseAPI {
  constructor() {
    super("/auth")
  }

  async signin(data: SigninData) {
    return this.http.post("/signin", {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: data
    })
    .then(xhr => xhr.status)
  }

  async signup(data: SignupData) {
    return this.http.post("/signup", {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: data
    }).then(xhr => xhr.status)
  }

  async read(): Promise<User> {
    return this.http.get("/user", {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(xhr => xhr.response)
  }

  async logout() {
    return this.http.post("/logout", {
      credentials: 'include'
    })
    .then(xhr => xhr.status)
  }
  
  create = undefined
  request = undefined
  update = undefined
  delete = undefined
}

export default new AuthAPI()
