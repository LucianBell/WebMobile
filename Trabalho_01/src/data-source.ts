import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "127.0.0.1",
    port: 5433,
    username: process.env.DB_USER,
    password: process.env.DB_PWS,
    database: "Rock_N_Roll_API",
    synchronize: true,
    logging: false,
    entities: [__dirname+"/entities/*.{js,ts}"],
    migrations: [],
    subscribers: [],
})
