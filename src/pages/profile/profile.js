import tpl from "./profile.hbs"

import aside from "../../modules/userProfile/blocks/aside/aside.js"
import avatar from "../../modules/userProfile/components/image/avatar.js"
import {userData} from "../../modules/userProfile/blocks/userData/userdata.js"
import {person} from "../../modules/userProfile/blocks/userData/model.js"
import userChange from "../../modules/userProfile/blocks/userChange/userChange.js"

export default () => {
  const types = "text"
  const disabled = "disabled"
  return tpl({
    aside: aside(),
    avatar: avatar(),
    userData: userData(types, disabled, person.name, person.person),
    userChange: userChange({
      changeData: "Изменить данные",
      changePassword: "Изменить пароль",
      exite: "Выход"
    })
  })
}