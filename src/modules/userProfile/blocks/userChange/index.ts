import { UserChanges } from "./userChange"
import { router } from "../../../../index"
import { UserLogoutController } from "../../../../controllers/user-Logout"

const userLogoutController = new UserLogoutController()

function changePage(event: MouseEvent) {
  event.preventDefault()
  const target: HTMLElement = <HTMLElement>event.target
  switch(target.dataset.page) {
    case "changeData":
      router.go("/profileData")
      break
    case "changePassword":
      router.go("/profilePassword")
      break
    case "exite":
      userLogoutController.logout()
      break
  }
}

const props = {
  data: {
    changeData: "Изменить данные",
    changePassword: "Изменить пароль",
    exite: "Выход"
  },
  attributes: {
    class: "profile__container"
  },
  events: {
    click: changePage
  }
}

export const userChange = new UserChanges(props)
