//Component's template
import { ModalWindowAvatar } from "./modal"
import { Button } from "../../../components/button/button"
import { Input } from "../../../components/input/input"
import { InputAvatarAdd } from "./components/input/input"
//utils
import { checkInputFocusIn, checkInputFocusOut } from "../../../utils/checkUtilsInput/checkInputs"

const inputAvatarAdd = new InputAvatarAdd({
  attributes: {
    class: "modal-input"
  }
})

const buttonPropsAvatar = {
  data: {
    value: "Поменять"
  },
  attributes: {
    class: "button"
  }
}

const buttonAvatar = new Button(buttonPropsAvatar)

const propsAvatar = {
  data: {
    title: "Загрузить файл",
  },
  attributes: {
    class: "modal-overlay",
    "data-close": "true"
  },
  input: inputAvatarAdd,
  button: buttonAvatar
}

export const modalWindowAvatar = new ModalWindowAvatar(propsAvatar)

const inputPropsLogin = { 
  attributes: { 
  class: "input-container input-container_margin",
  },
  data: {
    id: "login",
    name: "login",
    type: "text",
    label: "Login",
    helperText: "Неверный логин"
  }
}

const inputAddUser = new Input(inputPropsLogin)

const buttonPropsAddUser = {
  data: {
    value: "Добавить"
  },
  attributes: {
    class: "button"
  }
}

const buttonAddUser = new Button(buttonPropsAddUser)

const propsAddUser = {
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
  input: inputAddUser,
  button: buttonAddUser
}

export const modalWindowAddUser = new ModalWindowAvatar(propsAddUser)

const inputPropsLoginDelete = { 
  attributes: { 
  class: "input-container input-container_margin",
  },
  data: {
    id: "login",
    name: "login",
    type: "text",
    label: "Login",
    helperText: "Неверный логин"
  }
}

const inputDeleteUser = new Input(inputPropsLoginDelete)

const buttonPropsDeleteUser = {
  data: {
    value: "Удалить"
  },
  attributes: {
    class: "button"
  }
}

const buttonDeleteUser = new Button(buttonPropsDeleteUser)

const propsDeleteUser = {
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
  input: inputDeleteUser,
  button: buttonDeleteUser
}

export const modalWindowDeleteUser = new ModalWindowAvatar(propsDeleteUser)

