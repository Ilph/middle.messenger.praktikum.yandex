import tpl from "./profilePassword.hbs"

import aside from "../../modules/userProfile/blocks/aside/aside"
import avatar from "../../modules/userProfile/components/image/avatar"
import {userData} from "../../modules/userProfile/blocks/userData/userdata"
import {personPassword} from "../../modules/userProfile/blocks/userData/model.js"
import button from "../../components/button/button"

export default () => {
  const types = "password"
  disabled = ""
  return tpl({
    aside: aside(),
    avatar: avatar(),
    userData: userData(types, disabled, "", personPassword.person),
    save: button({value: "Сохранить"})
  })
}