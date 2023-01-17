import tpl from "./modal.hbs"

export default (button: string) => {
  return tpl({button: button})
}
