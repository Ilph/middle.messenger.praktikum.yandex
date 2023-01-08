import tpl from "./profileData.hbs"

import aside from "../../modules/userProfile/blocks/aside/aside"
import avatar from "../../modules/userProfile/components/image/avatar"
import {userData} from "../../modules/userProfile/blocks/userData/userdata"
import {person} from "../../modules/userProfile/blocks/userData/model.js"
import button from "../../components/button/button"

export default () => {
  const types = "text"
  const disabled = ""

  return tpl({
    aside: aside(),
    avatar: avatar(),
    userData: userData(types, disabled, "", person.person),
    save: button({value: "Сохранить"})
  })
}