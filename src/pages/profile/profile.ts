import tpl from "./profile.hbs"

import aside from "../../modules/userProfile/blocks/aside/aside"
import avatar from "../../modules/userProfile/components/image/avatar"
import {userData} from "../../modules/userProfile/blocks/userData/userdata"
import {person} from "../../modules/userProfile/blocks/userData/model"
import userChange from "../../modules/userProfile/blocks/userChange/userChange"

export default () => {
  const options = {
    changeData: "Изменить данные",
    changePassword: "Изменить пароль",
    exite: "Выход"
  }

  const types: string = "text"
  const disabled: string = "disabled"

  return tpl({
    aside: aside(),
    avatar: avatar(),
    userData: userData(types, disabled, person),
    userChange: userChange(options)
  })
}
