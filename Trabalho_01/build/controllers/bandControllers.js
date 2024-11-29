"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBand = exports.updateBand = exports.getBand = exports.getBands = exports.postBand = void 0;
var data_source_1 = require("../data-source");
var Band_1 = require("../entities/Band");
var postBand = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var band, results, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                band = data_source_1.AppDataSource.getRepository(Band_1.Band).create(req.body);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Band_1.Band).save(band)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.status(201).json(results)];
            case 2:
                error_1 = _a.sent();
                console.error('Error inserting Band:', error_1);
                return [2 /*return*/, res.status(500).json({ message: 'Erro ao inserir banda', error: error_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postBand = postBand;
var getBands = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Band_1.Band).find()];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.status(200).json(results)];
            case 2:
                error_2 = _a.sent();
                console.error('Error retrieving Bands:', error_2);
                return [2 /*return*/, res.status(500).json({ message: 'Erro ao buscar bandas', error: error_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getBands = getBands;
var getBand = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, band, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = +req.params.id;
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Band_1.Band).findOneBy({ id: id })];
            case 1:
                band = _a.sent();
                if (!band) {
                    return [2 /*return*/, res.status(404).json({ message: 'Banda não encontrada' })];
                }
                return [2 /*return*/, res.status(200).json(band)];
            case 2:
                error_3 = _a.sent();
                console.error('Error retrieving Band:', error_3);
                return [2 /*return*/, res.status(500).json({ message: 'Erro ao buscar banda', error: error_3.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getBand = getBand;
var updateBand = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, band, results, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = +req.params.id;
                if (!id) {
                    return [2 /*return*/, res.status(400).json({ message: 'ID inválido' })];
                }
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Band_1.Band).findOneBy({ id: id })];
            case 1:
                band = _a.sent();
                if (!band) {
                    return [2 /*return*/, res.status(404).json({ message: 'Banda não encontrada' })];
                }
                data_source_1.AppDataSource.getRepository(Band_1.Band).merge(band, req.body);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Band_1.Band).save(band)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.status(200).json(results)];
            case 3:
                error_4 = _a.sent();
                console.error('Error updating Band:', error_4);
                return [2 /*return*/, res.status(500).json({ message: 'Erro ao atualizar banda', error: error_4.message })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateBand = updateBand;
var deleteBand = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, band, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = +req.params.id;
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Band_1.Band).findOneBy({ id: id })];
            case 1:
                band = _a.sent();
                if (!band) {
                    return [2 /*return*/, res.status(404).json({ message: 'Banda não encontrada' })];
                }
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(Band_1.Band).delete(id)];
            case 2:
                _a.sent();
                return [2 /*return*/, res.status(204).send()];
            case 3:
                error_5 = _a.sent();
                console.error('Error deleting Band:', error_5);
                return [2 /*return*/, res.status(500).json({ message: 'Erro ao deletar banda', error: error_5.message })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteBand = deleteBand;
//# sourceMappingURL=bandControllers.js.map