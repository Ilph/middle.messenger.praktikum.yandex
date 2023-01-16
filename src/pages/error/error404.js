import tpl from "./error.hbs"

export default () => {
  return tpl({
    errorNumber: "404",
    text: "Не туда попали",
    link: "Назад к чатам"
  })
}
