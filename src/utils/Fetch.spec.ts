import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon'
import { HTTP } from "./Fetch"
import { expect } from "chai"

describe("Fetch", () => {
  let xhr: SinonFakeXMLHttpRequestStatic
  let instance: HTTP
  const requests: SinonFakeXMLHttpRequest[] = []
  
  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest()
    // @ts-ignore
    global.XMLHttpRequest = xhr
    xhr.onCreate = function (xhr) {
    requests.push(xhr)
    }
    instance = new HTTP("/auth")
  })

  afterEach(() => {
    requests.length = 0
    sinon.restore()
  })

  it("get() should send GET request", () => {
    instance.get("/user")

    const [request] = requests
    
    expect(request.method).to.eq("GET")
  })

  it("post() should send POST request", () => {
    instance.post("/user", {
        body: "post"
    })

    const [request] = requests

    expect(request.method).to.eq("POST")
    expect(request.requestBody).to.include("post")
  })

  it("put() should send PUT request", () => {
    instance.put("/user", {
        body: "put"
    })

    const [request] = requests

    expect(request.method).to.eq("PUT")
    expect(request.requestBody).to.include("put")
  })

  it("delete() should send DELETE request", () => {
    instance.delete("/user", {
        body: "delete"
    })

    const [request] = requests

    expect(request.method).to.eq("DELETE")
    expect(request.requestBody).to.include("delete")
  })
})
