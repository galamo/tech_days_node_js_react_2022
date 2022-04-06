
import express, { Request, Response, NextFunction } from "express"

const app = express()

const port = 3500



app.get("/health-check", (req: Request, res: Response, next: NextFunction) => {
    res.append("requestId", "test-request-id")
    res.send("Server is running")
})


app.listen(port, () => {
    console.log("#########################")
    console.log(`Listening to port ${port}`)
    console.log("##########################")
})