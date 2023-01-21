import {ChatMain} from "./chatMain"

const props = {
  text: "Выберите чат, чтобы отправить сообщение",
  attributes: {
    class: "chat__section"
  }
}

export const chatMain = new ChatMain(props)
