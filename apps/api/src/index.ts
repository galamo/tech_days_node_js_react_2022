
import express, { Request, Response, NextFunction } from "express"
import { addRequestId } from "./middleware/addRequestId"
import { authMiddleware } from "./middleware/authMiddelware"
import carsRouter from "./cars/route"
import authRouter from "./auth/route"
import dotenv from "dotenv"
import bodyParser from "body-parser"
dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(addRequestId)

app.use("/auth", authRouter)

app.get("/health-check", (req: Request, res: Response, next: NextFunction) => {
    res.append("requestId", "test-request-id")
    console.log((req as any).requestId)
    res.send("Server is running")
})

app.use(authMiddleware)
app.use("/cars", carsRouter)


app.use((error, req, res, next) => {
    console.log(error.message, req.requestId)
    res.status(400).json({ message: "Something went wrong" })
})

app.listen(process.env.PORT, () => {
    console.log("#########################")
    console.log(`Listening to port ${process.env.PORT}`)
    console.log("##########################")
})