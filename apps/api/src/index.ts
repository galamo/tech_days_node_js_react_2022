
import express, { Request, Response, NextFunction } from "express"
import { addRequestId } from "./middleware/addRequestId"
const app = express()

const port = 3500

// jwt 

app.use(addRequestId)
app.use((req, res, next) => {
    const apiKey = req.query.apiKey;
    if (req.query.apiKey === "apiKeySecret") return next()
    res.status(401).send("Api key - unauthorized")
})

app.get("/health-check", (req: Request, res: Response, next: NextFunction) => {
    res.append("requestId", "test-request-id")
    console.log((req as any).requestId)
    res.send("Server is running")
})

app.get("/cars", (req: Request, res: Response, next: NextFunction) => {
    res.json({ result: ["car1", "car2"] })
})


app.listen(port, () => {
    console.log("#########################")
    console.log(`Listening to port ${port}`)
    console.log("##########################")
})