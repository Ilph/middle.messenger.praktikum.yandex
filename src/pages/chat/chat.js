import tpl from "./chat.hbs"
import sideBar from ""
import mainContent from ""

export default () => {
  return tpl({
    sideBar: sideBar(),
    mainContent: mainContent()
  })
}