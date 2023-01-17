import tpl from "./aside.hbs";
import arrow from "../../../../../static/icons/arrowAside.png"

const arrows: string = `<img src="${arrow}"/>`
export default () => {
  return tpl({
    arrow: arrows})
}
