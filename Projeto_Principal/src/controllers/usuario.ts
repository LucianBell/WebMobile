import {Request, Response} from "express"
import {AppDataSource} from "../data-source"
import {Usuario} from "../entity/Usuario"

export const postUsuario = async (req: Request, res: Response) => {
    try {
        const usuario: Usuario[] = AppDataSource.getRepository(Usuario).create(req.body)
        const results: Usuario[] = await AppDataSource.getRepository(Usuario).save(usuario)
        return res.status(200).send(results)
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir Usuario' })
    }
}

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const results: Usuario[] = await AppDataSource.getRepository(Usuario).find()
        return res.status(200).send(results)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao inserir Usuario' })
    }
}

export const getUsuario = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        const results: Usuario = 
            await AppDataSource.getRepository(Usuario).findOneBy({id: id})
        return res.status(200).send(results)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao inserir Usuario' })
    }
}

export const updateUsuario = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        if (!id) {
            return res.status(400).json({ error: 'id não encontrado' })
        }
        const usuario: Usuario = await 
            AppDataSource.getRepository(Usuario).findOneBy({ id: id })
        if (!usuario) {
            return res.status(400).json({ error: 'usuário inválido' })
        }

        AppDataSource.getRepository(Usuario).merge(usuario, req.body)
        const results: Usuario = await AppDataSource.getRepository(Usuario).save(usuario)
        return res.status(200).send(results)
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar Usuario' })
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        const results = await AppDataSource.getRepository(Usuario).delete(id)      
        return res.status(200).send(results)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao inserir Usuario' })
    }
}