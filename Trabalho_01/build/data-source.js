"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "127.0.0.1",
    port: 5433,
    username: process.env.DB_USER,
    password: process.env.DB_PWS,
    database: "Rock_N_Roll_API",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entities/*.{js,ts}"],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map