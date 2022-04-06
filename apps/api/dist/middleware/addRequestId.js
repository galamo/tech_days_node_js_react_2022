"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRequestId = void 0;
const uuidv4_1 = require("uuidv4");
function addRequestId(req, res, next) {
    const generateRequestId = (0, uuidv4_1.uuid)();
    res.append("x-request-id", generateRequestId);
    req.requestId = generateRequestId;
    next();
}
exports.addRequestId = addRequestId;
