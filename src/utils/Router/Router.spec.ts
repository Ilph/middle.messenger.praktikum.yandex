import { expect } from "chai"
import Router from "./Router"
import { Block } from "../Block"
import Handlebars from "handlebars"
import sinon from "sinon"

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

describe("Router", () => {
  const block = new testBlock({value: "test"})

  beforeEach(() => {
    Router.reset()
    window.history.forward = sinon.fake()
    window.history.back = sinon.fake()
  })

  it("should return length of Router.routes ", () => {
    Router.use("testPage", block)

    expect(Router.routes.length).to.eq(1)
  })

  it("forward", () => {
    Router.forward()

    expect((window.history.forward as any).callCount).to.eq(1)
  })

  it("back", () => {
    Router.back()

    expect((window.history.back as any).callCount).to.eq(1)
  })

})
