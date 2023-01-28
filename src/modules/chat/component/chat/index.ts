import { Chat } from "./chat"

const props = {
  settings: {withInternalID: true},
  data: {
    name: "Ильфат",
    you: "Вы",
    sometext: "Изображение",
    date: "10:00",
    quantity: "2"
  },
  attributes: {
    class: "chat-lists"
  }
}

export const chat = new Chat(props)
