export function render(query:string, block: any) {
  const root = document.getElementById(query) as HTMLElement
  root.appendChild(block.getContent()!)
  block.dispatchComponentDidMount()
  return root
}

export function renderRemove(query: string) {
  const root = document.getElementById(query) as HTMLElement
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}
