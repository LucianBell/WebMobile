"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bandControllers_1 = require("../controllers/bandControllers");
var router = express_1.default.Router();
router.get('/bands/', bandControllers_1.getBands);
router.get('/bands/:id', bandControllers_1.getBand);
router.post('/bands', bandControllers_1.postBand);
router.put('/bands/:id', bandControllers_1.updateBand);
router.delete('/bands/:id', bandControllers_1.deleteBand);
exports.default = router;
//# sourceMappingURL=bandRoutes.js.map