import button from "../../../components/button/button"
import modalWindow from "../modalWindows/modal"
import {upLoad} from "./upLoad"

export function createModal() {
  const input = document.querySelector(".avatar__input")
  const modal = document.createElement("div")
  modal.classList.add("modal")
  const tpl = modalWindow({button: button({value:"Поменять"})})
  modal.insertAdjacentHTML("afterbegin", tpl)
  document.body.appendChild(modal)
  
  function handler() {
    modal.classList.add("open")
  } 

  function listener(event) {
    if(event.target.dataset.close)
      modal.classList.remove("open")
  }

  input.addEventListener("click", handler)
  modal.addEventListener("click", listener)
  upLoad()
}