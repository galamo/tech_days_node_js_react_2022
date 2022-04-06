import jwt from "jsonwebtoken"

export function authMiddleware(req, res, next) {
    const { authorization } = req.headers
    jwt.verify(authorization, process.env.SECRET, function (err, decoded) {
        if (err) {
            console.log("verification token failed")
            return next(new Error())
        } else {
            return next()
        }
    });


}

