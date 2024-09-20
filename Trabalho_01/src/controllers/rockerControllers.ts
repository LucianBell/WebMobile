import {Request, Response} from "express"
import {AppDataSource} from "../data-source"
import { Rocker } from "../entities/Rocker"

export const postRocker = async (req: Request, res: Response) => {
    try {
        const rocker = AppDataSource.getRepository(Rocker).create(req.body)
        const results = await AppDataSource.getRepository(Rocker).save(rocker)
        return res.status(201).send(results)
    } catch (error) {  
        console.error('Error inserting Rocker:', error);
        res.status(500).json({ message: 'Erro ao inserir Rocker', error: error.message })
    }
}

export const getRockers = async (req: Request, res: Response) => {
    try {
        const results: Rocker[] = await AppDataSource.getRepository(Rocker).find()
        return res.status(200).send(results)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro ao buscar Rockers', error: error.message });
    }
}

export const getRocker = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        
        const results: Rocker = 
            await AppDataSource.getRepository(Rocker).findOneBy({id: id})

        
        if (!results) {
            return res.status(404).json({ message: 'Rocker não encontrado' });
        }

        return res.status(200).send(results)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro ao buscar Rocker', error: error.message });
    }
}

export const updateRocker = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        if (!id) {
            return res.status(400).json({ error: 'id não encontrado' })
        }

        const rocker: Rocker = await 
            AppDataSource.getRepository(Rocker).findOneBy({ id: id })

        if (!rocker) {
            return res.status(404).json({ error: 'Rocker inválido' })
        }

        AppDataSource.getRepository(Rocker).merge(rocker, req.body)
        const results: Rocker = await AppDataSource.getRepository(Rocker).save(rocker)
        return res.status(200).send(results)
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar Rocker', error: error.message });
    }
}

export const deleteRocker = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id

        const rocker = await AppDataSource.getRepository(Rocker).findOneBy({ id });

        if (!rocker) {
            return res.status(404).json({ message: 'Rocker não encontrado' });
        }

        const results = await AppDataSource.getRepository(Rocker).delete(id)      
        return res.status(204).send(results)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro ao deletar Rocker', error: error.message });
    }
}