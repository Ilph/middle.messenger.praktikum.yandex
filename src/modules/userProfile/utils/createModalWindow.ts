export function createModal() {
  const modal = document.createElement("div")
  modal.classList.add("modal")
  modal.setAttribute("id", "modal")
  document.body.appendChild(modal)

  function listener(event: MouseEvent) {
    const target = event.target as HTMLButtonElement
    console.log(target)
    if(target.dataset.close) {
      modal.classList.remove("open")
      modal.removeChild(target)
    }
  }
  modal.addEventListener("click", listener)
}
