import { UserChanges } from "./userChange"

const props = {
  data: {
    changeData: "Изменить данные",
    changePassword: "Изменить пароль",
    exite: "Выход"
  },
  attributes: {
    class: "profile__container"
  }
}

export const userChange = new UserChanges(props)
