import { expect } from "chai"
import { set } from "./set"

describe("Helpers function", () => {
  describe("set", () => {
    it("should return passed object if it is not an object", () => {
      //arrange
      const obj = "set"
      //act
      const result = set(obj, "test.test", 3)
      //assert
      expect(result).to.eq(obj)
    })

    it("should return passed null if null is pased as first argument", () => {
      //arrange
      const obj = null
      //act
      const result = set(obj, "test.test", 3)
      //assert
      expect(result).to.eq(obj)
    })

    it("should throw an error if path is not a string", () => {
      const obj = {}
      const path = 3 as any

      const fn = () => set(obj, path, 3)

      expect(fn).to.throw(Error)
    })

    it("should set new property to passed object with passed value", () => {
      const obj = {}
      const path = "store.state"
      const value = 3

      const result = set(obj, path, value)

      expect((result as any).store.state).to.eq(value)
    })
  })
})
