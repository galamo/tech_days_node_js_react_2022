"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addRequestId_1 = require("./middleware/addRequestId");
const authMiddelware_1 = require("./middleware/authMiddelware");
const route_1 = __importDefault(require("./cars/route"));
const route_2 = __importDefault(require("./auth/route"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(addRequestId_1.addRequestId);
app.use("/auth", route_2.default);
app.get("/health-check", (req, res, next) => {
    res.append("requestId", "test-request-id");
    console.log(req.requestId);
    res.send("Server is running");
});
app.use(authMiddelware_1.authMiddleware);
app.use("/cars", route_1.default);
app.use((error, req, res, next) => {
    console.log(error.message, req.requestId);
    res.status(400).json({ message: "Something went wrong" });
});
app.listen(process.env.PORT, () => {
    console.log("#########################");
    console.log(`Listening to port ${process.env.PORT}`);
    console.log("##########################");
});
