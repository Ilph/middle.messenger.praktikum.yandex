//Component's template
import { ModalWindowAvatar } from "./modal"
import { Button } from "../../../components/button/button"
import { Input } from "../../../components/input/input"
import { InputAvatarAdd } from "./components/input/input"
//Controllers
import ChatController from "../../../controllers/chats-controllers"
import UserController from "../../../controllers/user-controllers"
//store
import store from "../../../utils/Store/store"
//utils
import { checkInputFocusIn, checkInputFocusOut } from "../../../utils/checkUtilsInput/checkInputs"

function sendAvatar(event: MouseEvent) {
  event.preventDefault()
  const input = document.querySelector("#file") as HTMLInputElement
  const modal = document.querySelectorAll("#modal")
  const formData = new FormData()
  const img = input!.files![0]
  if(!img) {
    return
  }
  formData.append("avatar", img)
  UserController.changeUserAvatar(formData)
  modal?.forEach(item => {
    item.classList.remove("open")})
}

export const modalWindowAvatar = new ModalWindowAvatar({
  data: {
    title: "Загрузить файл",
  },
  attributes: {
    class: "modal-overlay",
    "data-close": "true"
  },
  input: new InputAvatarAdd({
    attributes: {
      class: "modal-input"
    }
  }),
  button: new Button({
    data: {
      value: "Поменять"
    },
    attributes: {
      class: "button"
    },
    events: {
      click: sendAvatar
    }
  })
})

function sendAvatarChat(event: MouseEvent) {
  event.preventDefault()
  const input = document.querySelector("#file") as HTMLInputElement
  const newProps = store.getState()
  const chatId = newProps.selectedChat
  const formData = new FormData()
  const img = input!.files![0]
  if(!img) {
    return
  }
  formData.append("avatar", img)
  formData.append("chatId", chatId)
  ChatController.addAvatarToChat(formData)
  const modal = document.querySelectorAll("#modal")
  modal?.forEach(item => {
    item.classList.remove("open")
  })
}

export const modalWindowAddAvatarChat = new ModalWindowAvatar({
  data: {
    title: "Загрузить файл",
  },
  attributes: {
    class: "modal-overlay",
    "data-close": "true"
  },
  input: new InputAvatarAdd({
    attributes: {
      class: "modal-input"
    }
  }),
  button: new Button({
    data: {
      value: "Поменять"
    },
    attributes: {
      class: "button"
    },
    events: {
      click: sendAvatarChat
    }
  })
})

export const modalWindowAddUser = new ModalWindowAvatar({
  data: {
    title: "Добавить пользователя",
  },
  attributes: {
    class: "modal-overlay",
    "data-close": "true"
  },
  events: {
    focus: checkInputFocusIn,
    blur: checkInputFocusOut,
    click: () => {console.log("AddUser")}
  },
  input: new Input({
    attributes: { 
      class: "input-container input-container_margin",
      },
      data: {
        id: "ID_user",
        name: "ID_user",
        type: "text",
        label: "ID_user",
        helperText: "Неверный ID"
      }
    }),
  button: new Button({
    data: {
      value: "Добавить пользователя"
    },
    attributes: {
      class: "button"
    },
    events: {
      click: (event: MouseEvent) => {
        event.preventDefault()
        const input = document.querySelector("#ID_user") as HTMLInputElement
        const nameChat = input.value
        input.value = ""
        const newProps = store.getState()
        const modal = document.querySelectorAll("#modal")
        modal?.forEach(item => {
          item.classList.remove("open")
        })
        ChatController.addUserToChat(newProps.selectedChat, +nameChat)
      }
    }
  })
})


export const modalWindowDeleteUser = new ModalWindowAvatar({
  data: {
    title: "Удалить пользователя"
  },
  attributes: {
    class: "modal-overlay",
    "data-close": "true"
  },
  events: {
    focus: checkInputFocusIn,
    blur: checkInputFocusOut,
    click: () => {console.log("DeleteUser")}
  },
  input: new Input({
    attributes: { 
      class: "input-container input-container_margin",
      },
      data: {
        id: "ID_user",
        name: "ID_user",
        type: "text",
        label: "ID user",
        helperText: "Неверный ID"
      }
    }),
  button: new Button({
    data: {
      value: "Удалить пользователя"
    },
    attributes: {
      class: "button"
    },
    events: {
      click: (event: MouseEvent) => {
        event.preventDefault()
        const input = document.querySelector("#ID_user") as HTMLInputElement
        const nameChat = input.value
        input.value = ""
        const newProps = store.getState()
        const modal = document.querySelectorAll("#modal")
        modal?.forEach(item => {
          item.classList.remove("open")
        })
        ChatController.deleteUserToChat(newProps.selectedId, +nameChat)
      }
    }
  })
})


export const modalWindowAddChat = new ModalWindowAvatar({
  data: {
    title: "Добавить чат"
  },
  attributes: {
    class: "modal-overlay",
    "data-close": "true"
  },
  input: new Input({
    attributes: { 
      class: "input-container input-container_margin",
      },
      data: {
        id: "nameChat",
        name: "nameChat",
        type: "text",
        label: "Chat names",
        helperText: "Неверный название чата"
      }
    }),
  button: new Button({
    data: {
      value: "Добавить чат"
    },
    attributes: {
      class: "button"
    },
    events: {
      click: (event: MouseEvent) => {
        event.preventDefault()
        const input = document.querySelector("#nameChat") as HTMLInputElement
        const nameChat = input.value
        input.value = ""
        ChatController.addChat(nameChat)
        const modal = document.querySelectorAll("#modal")
        modal?.forEach(item => {
          item.classList.remove("open")
        })
      }
    }
  })
})
