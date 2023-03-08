import { Block } from "./Block"
import Handlebars from "handlebars"
import { expect } from "chai"

interface testProps {
  value: string
}
const template = "<h1 id=\"page\">{{value}}</h1>"
class testBlock extends Block<testProps> {
  constructor(props: testProps) {
    super("div", props)
  }

  render() {
    const tpl = Handlebars.compile(template)
    return this.compile(tpl, {value: this.props.value})
  }
}

describe("Block", () => {
  const block = new testBlock({value: "test"})

  it("should contain template", () => {
    const root = global.document.querySelector("#root")  as HTMLElement
    root.appendChild(block.getContent()!)
    
    expect(global.document.body.innerHTML).to.contain("<h1 id=\"page\">test</h1>")
  })

  it("should change content", () => {
    block.setProps({
        value: "New test",
    })
    
    expect(block.getContent()!.textContent).equals("New test")
  })
})
