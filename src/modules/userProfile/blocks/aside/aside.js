import tpl from "./aside.hbs";
import arrow from "../../../../../static/icons/arrowAside.png"

const arrows = `<img src="${arrow}"/>`
export default () => {
  return tpl({
    arrow: arrows})
}