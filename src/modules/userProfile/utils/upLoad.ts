
export function upLoad() {

  const input = document.querySelector("#file") as HTMLInputElement
  const labelText = document.querySelector(".modal-input__label") as HTMLLabelElement
  const titleText = document.querySelector(".modal-window__title") as HTMLElement
  input.setAttribute("accept", ".png,.jpeg,.jpg,.gif") 

  const changeHandler = (event: Event) => {
    const target = (<HTMLInputElement>event.target)
    if (target.files) {
      const {files} = target
      const fileType = files[0].type
      labelText.textContent = fileType
      labelText.appendChild(target)
      titleText.textContent = "Файл загружен"
    }
  }

  input.addEventListener("change", changeHandler)
}

export function returnModalWindow() {
  const labelText = document.querySelector(".modal-input__label") as HTMLLabelElement
  const titleText = document.querySelector(".modal-window__title") as HTMLElement
  labelText.innerHTML = `Выбрать файл на <span>компьтере</span>
  <input type="file" id="file" name="file" class="modal-input__input" />`
  titleText.textContent = "Загрузить файл"
}
