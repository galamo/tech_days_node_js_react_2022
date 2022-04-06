import { uuid } from 'uuidv4';

export function addRequestId(req, res, next) {
    const generateRequestId = uuid();
    res.append("x-request-id", generateRequestId)
    req.requestId = generateRequestId;
    next()
}

