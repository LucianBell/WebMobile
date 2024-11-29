"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var rockerControllers_1 = require("../controllers/rockerControllers");
var router = express_1.default.Router();
router.get('/rocker', rockerControllers_1.getRockers);
router.get('/rocker/:id', rockerControllers_1.getRocker);
router.post('/rocker', rockerControllers_1.postRocker);
router.put('/rocker/:id', rockerControllers_1.updateRocker);
router.delete('/rocker/:id', rockerControllers_1.deleteRocker);
exports.default = router;
//# sourceMappingURL=rockerRoutes.js.map