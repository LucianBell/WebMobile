"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/protectedRoutes.ts
var express_1 = require("express");
var authMiddleware_1 = require("../middleware/authMiddleware");
var router = (0, express_1.Router)();
router.get("/protected/welcome", authMiddleware_1.authenticateToken, function (req, res) {
    var _a;
    // `req.user` is strongly typed as JwtPayload
    var username = ((_a = req.user) === null || _a === void 0 ? void 0 : _a.username) || "Guest";
    res.json({ message: "Welcome, ".concat(username, "!") });
});
exports.default = router;
//# sourceMappingURL=protectedRoutes.js.map