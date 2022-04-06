"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3500;
app.listen(port, () => {
    console.log("#########################");
    console.log(`Listening to port ${port}`);
    console.log("##########################");
});
