import { getUser } from "../auth/index"
import express from "express"
import Joi from "joi"
import jwt from "jsonwebtoken"
import usersJson from "../data/users.json"
const schemaLogin = Joi.object({
    userName: Joi.string().required().max(100),
    password: Joi.string().required().max(100)
})

const router = express.Router()
router.use((req, res, next) => {
    console.log("auth middleware only")
    next()
})
router.post("/login", (req, res, next) => {
    const body = req.body
    const { error } = schemaLogin.validate(body)
    if (error) return next(new Error(error.message))
    const { userName, password } = body;
    const user = getUser(usersJson, userName, password)
    if (user) {
        const result = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: user.userName
        }, process.env.SECRET);
        return res.json({ message: "login succeeded", token: result })
    }
    return next(new Error("Not authorized"))

})

export default router;