import { getCarByName } from "./index"
import express from "express"
import carsJson from "../data/index.json"
import Joi from "joi"


const schemaCar = Joi.object({
    Name: Joi.string().required().max(100),
    Horsepower: Joi.number().required().max(1000)
})


const router = express.Router()

router.use((req, res, next) => {
    console.log("cars middleware only")
    next()
})

// cars/
router.get("/", (req, res, next) => {
    // validations
    res.json(carsJson)
})
//cars/<Name>
router.get("/:name", (req, res, next) => {
    const result = getCarByName(carsJson, req.params.name)
    res.json(result)
})

router.post("/", validateCarSchema, (req, res, next) => {
    const body = req.body
    return res.json({ message: "car created!", body })
})

function validateCarSchema(req, res, next) {
    const body = req.body
    const { error } = schemaCar.validate(body)
    if (error) return next(new Error(error.message))
    return next()
}


export default router;