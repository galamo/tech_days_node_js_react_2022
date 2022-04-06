"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3500;
app.get("/health-check", (req, res, next) => {
    res.append("requestId", "test-request-id");
    res.send("Server is running");
});
app.listen(port, () => {
    console.log("#########################");
    console.log(`Listening to port ${port}`);
    console.log("##########################");
});
