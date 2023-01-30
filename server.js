import express from "express"
import { fileURLToPath } from "url"
import { join, dirname} from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.static("./dist"))

app.use("/*", (req, res) => {
  res.sendFile(join(__dirname, "./dist/index.html"))
})

function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  } catch(e) {
    console.log(e)
  }
}

start()
