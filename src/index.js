import test from './index.hbs'
import "./style.css"

document.getElementById("root").innerHTML = test({
  test: "new",
})