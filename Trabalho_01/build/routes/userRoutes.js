"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userControllers_1 = require("../controllers/userControllers");
var router = (0, express_1.Router)();
router.post("/user/register", userControllers_1.register);
router.post("/user/login", userControllers_1.login);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map