
import express from "express"

const app = express()

const port = 3500



app.listen(port, () => {
    console.log("#########################")
    console.log(`Listening to port ${port}`)
    console.log("##########################")
})