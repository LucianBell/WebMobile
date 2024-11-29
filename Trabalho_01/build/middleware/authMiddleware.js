"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
var authenticateToken = function (req, res, next) {
    var authHeader = req.header("Authorization");
    var token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token missing" });
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded; // Attach decoded token data to the request
        next();
    }
    catch (err) {
        return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
};
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=authMiddleware.js.map