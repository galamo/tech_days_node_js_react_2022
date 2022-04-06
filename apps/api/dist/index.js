"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addRequestId_1 = require("./middleware/addRequestId");
const app = (0, express_1.default)();
const port = 3500;
// jwt 
app.use(addRequestId_1.addRequestId);
app.use((req, res, next) => {
    const apiKey = req.query.apiKey;
    if (req.query.apiKey === "apiKeySecret")
        return next();
    res.status(401).send("Api key - unauthorized");
});
app.get("/health-check", (req, res, next) => {
    res.append("requestId", "test-request-id");
    console.log(req.requestId);
    res.send("Server is running");
});
app.get("/cars", (req, res, next) => {
    res.json({ result: ["car1", "car2"] });
});
app.listen(port, () => {
    console.log("#########################");
    console.log(`Listening to port ${port}`);
    console.log("##########################");
});
