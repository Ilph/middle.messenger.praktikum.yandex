// import { modalWindowAvatar, modalWindowAddUser, modalWindowDeleteUser, modalWindowAddChat, modalWindowAddAvatarChat } from "../modalWindows/index"
// import { upLoad } from "./upLoad"

export function createModal() {
  const modal = document.createElement("div")
  modal.classList.add("modal")
  modal.setAttribute("id", "modal")
  document.body.appendChild(modal)
  // const tags = document.querySelectorAll(selector) as NodeListOf<Element>
 
  // function handler(event: MouseEvent) {
  //   const target: HTMLElement = <HTMLElement>event.target
  //   switch(target!.dataset.modal) {
  //     case "profileData":
  //       modal.appendChild(modalWindowAvatar.getContent()!)
  //       upLoad()
  //       break
  //     case "chatAddUser":
  //       modal.appendChild(modalWindowAddUser.getContent()!)
  //       break
  //     case "chatDeleteUser":
  //       modal.appendChild(modalWindowDeleteUser.getContent()!)
  //       break
  //     case "chatAdd":
  //       modal.appendChild(modalWindowAddChat.getContent()!)
  //       break
  //     case "addAvatarChat":
  //       modal.appendChild(modalWindowAddAvatarChat.getContent()!)
  //       upLoad()
  //       break
  //   }
  //   modal.classList.add("open")
  // }

  function listener(event: MouseEvent) {
    const target = event.target as HTMLButtonElement
    if(target.dataset.close) {
      modal.classList.remove("open")
    }
  }

  // tags.forEach(tag => {
  //   tag.addEventListener("click", handler)
  // })
  modal.addEventListener("click", listener)
}
