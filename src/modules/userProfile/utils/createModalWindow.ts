import { modalWindowAvatar, modalWindowAddUser, modalWindowDeleteUser } from "../modalWindows/index"
import { upLoad } from "./upLoad"


export function createModal(selector: string) {
  const tags = document.querySelectorAll(selector) as NodeListOf<Element>
  const modal = document.createElement("div")
  modal.classList.add("modal")
  document.body.appendChild(modal)


  function handler(event: MouseEvent) {
    const target: HTMLElement = <HTMLElement>event.target
    switch(target!.dataset.modal) {
      case "profileData":
        modal.appendChild(modalWindowAvatar.getContent()!)
        upLoad()
        break
      case "chatAddUser":
        modal.appendChild(modalWindowAddUser.getContent()!)
        break
      case "chatDeleteUser":
        modal.appendChild(modalWindowDeleteUser.getContent()!)
        break
    }
    modal.classList.add("open")
  }

  function listener(event: MouseEvent) {
    const target = event.target as HTMLButtonElement
    if(target.dataset.close) {
      modal.classList.remove("open")
    }
  }

  tags.forEach(tag => {
    tag.addEventListener("click", handler)
  })
  modal.addEventListener("click", listener)
}
