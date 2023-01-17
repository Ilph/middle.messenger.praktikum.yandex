export function upLoad() {
  const input = document.querySelector("#file") as HTMLInputElement
  const labelText = document.querySelector(".modal-input__label") as HTMLLabelElement
  const titleText = document.querySelector(".modal-window__title") as HTMLElement

  input.setAttribute("accept", ".png,.jpeg,.jpg,.gif") 


  const changeHandler = event => {
    if (!event.target.files.length) {
      return
    }

    let {files} = event.target
    const fileType = files[0].type
    labelText.textContent = fileType
    titleText.textContent = "Файл загружен"
  }

  input.addEventListener("change", changeHandler)
}
