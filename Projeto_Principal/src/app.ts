// app.ts
import express, {Application} from "express"
import {AppDataSource} from "./data-source"
import cors from "cors"
import routerUsuario from "./routes/usuario"

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use("/api", routerUsuario)

export default app