import tpl from "./error.hbs"

export default () => {
  return tpl({
    errorNumber: "500",
    text: "Мы уже фиксим",
    link: "Назад к чатам"
  })
}


