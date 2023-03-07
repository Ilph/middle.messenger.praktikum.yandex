// import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon'
import { HTTP } from "./Fetch"
import { expect } from "chai"
import xhr from "xhr2"

const { XMLHttpRequest } = xhr

global.XMLHttpRequest = XMLHttpRequest

class HTTPTest extends HTTP {
  constructor(endpoint: string) {
    super(endpoint)
    this.endpoint = `${endpoint}`
  }
}


describe.only('Fetch', () => {

    const baseUrl = "http://httpbin.org/"
    const fetch = new HTTPTest(baseUrl)

    it('Should perform GET request', async () => {
        const result = await fetch.get('/get')

        expect(result.status).to.eq(200)
    })
    it('Should perform POST request', async () => {
        const result = await fetch.post('/post')
        expect(result.status).to.eq(200)
    })
    it('Should perform PUT request', async () => {
        const result = await fetch.put('/put')
        expect(result.status).to.eq(200)
    })
    it('Should perform DELETE request', async () => {
        const result = await fetch.delete('/delete')
        expect(result.status).to.eq(200)
    })
})

// describe.only("Fetch", () => {
//   let xhr: SinonFakeXMLHttpRequestStatic
//   let instance: HTTP
//   const requests: SinonFakeXMLHttpRequest[] = []

//   beforeEach(() => {
//     xhr = sinon.useFakeXMLHttpRequest()

//     xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
//       requests.push(request)
//     })
//     instance = new HTTP("/auth")
//   })

//   afterEach(() => {
//     requests.length = 0
//   })

//   it("get() should send GET request", () => {
//     instance.get("/user")

//     const [request] = requests

//     expect(request.method).to.eq("Get")
//   })
// })
