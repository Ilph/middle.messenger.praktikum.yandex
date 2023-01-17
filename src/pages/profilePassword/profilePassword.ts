import tpl from "./profilePassword.hbs"

import aside from "../../modules/userProfile/blocks/aside/aside"
import avatar from "../../modules/userProfile/components/image/avatar"
import {userData} from "../../modules/userProfile/blocks/userData/userdata"
import {personPassword} from "../../modules/userProfile/blocks/userData/model"
import button from "../../components/button/button"

export default () => {
  const types = "password"
  const disabled = ""
  const options = {
    value: "Сохранить",
    style: ""
  }
  return tpl({
    aside: aside(),
    avatar: avatar(),
    userData: userData(types, disabled, personPassword),
    save: button(options)
  })
}
