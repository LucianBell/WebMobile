import {Request, Response} from "express"
import {AppDataSource} from "../data-source"

export const resultCheck = async (req: Request, res: Response) => {
    return res.status(200).json({message: "Sucesso"})
}