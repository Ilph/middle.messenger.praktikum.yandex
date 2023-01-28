import { modalWindowAvatar } from "../modalWindows/index"
import {upLoad} from "./upLoad"

export function createModal() {
  const input = document.querySelector(".avatar__input") as HTMLInputElement
  const modal = document.createElement("div")
  modal.classList.add("modal")
  modal.appendChild(modalWindowAvatar.getContent()!)
  document.body.appendChild(modal)

  function handler() {
    modal.classList.add("open")
  }

  function listener(event: MouseEvent) {
    const target = event.target as HTMLButtonElement
    if(target.dataset.close)
      modal.classList.remove("open")
  }

  input.addEventListener("click", handler)
  modal.addEventListener("click", listener)
  upLoad()
}
