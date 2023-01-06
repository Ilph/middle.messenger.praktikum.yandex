import tpl from "./profile.hbs"
import aside from "../../modules/userProfile/blocks/aside/aside"
import avatar from "../../modules/userProfile/components/image/avatar"
import {userData} from "../../modules/userProfile/blocks/userData/userdata"
import {person} from "../../modules/userProfile/blocks/userData/model.js"
import userChange from "../../modules/userProfile/blocks/userChange/userChange"

export default () => {
  const types = "text"
  const disabled = "disabled"
  return tpl({
    aside: aside(),
    avatar: avatar({
      text: "Поменять аватар"
    }),
    userData: userData(types, disabled, person.name, person.person),
    userChange: userChange({
      changeData: "Изменить данные",
      changePassword: "Изменить пароль",
      exite: "Выход"
    })
  })
}