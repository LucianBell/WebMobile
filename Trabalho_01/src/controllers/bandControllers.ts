import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Band } from "../entities/Band";

export const postBand = async (req: Request, res: Response) => {
    try {
        const band = AppDataSource.getRepository(Band).create(req.body);
        const results = await AppDataSource.getRepository(Band).save(band);
        return res.status(201).json(results);
    } catch (error) {
        console.error('Error inserting Band:', error);
        return res.status(500).json({ message: 'Erro ao inserir banda', error: error.message });
    }
};

export const getBands = async (req: Request, res: Response) => {
    try {
        const results: Band[] = await AppDataSource.getRepository(Band).find();
        return res.status(200).json(results);
    } catch (error) {
        console.error('Error retrieving Bands:', error);
        return res.status(500).json({ message: 'Erro ao buscar bandas', error: error.message });
    }
};

export const getBand = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;
        const band = await AppDataSource.getRepository(Band).findOneBy({ id });

        if (!band) {
            return res.status(404).json({ message: 'Banda não encontrada' });
        }

        return res.status(200).json(band);
    } catch (error) {
        console.error('Error retrieving Band:', error);
        return res.status(500).json({ message: 'Erro ao buscar banda', error: error.message });
    }
};

export const updateBand = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;

        if (!id) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        const band = await AppDataSource.getRepository(Band).findOneBy({ id });

        if (!band) {
            return res.status(404).json({ message: 'Banda não encontrada' });
        }

        AppDataSource.getRepository(Band).merge(band, req.body);
        const results = await AppDataSource.getRepository(Band).save(band);

        return res.status(200).json(results);
    } catch (error) {
        console.error('Error updating Band:', error);
        return res.status(500).json({ message: 'Erro ao atualizar banda', error: error.message });
    }
};

export const deleteBand = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;

        const band = await AppDataSource.getRepository(Band).findOneBy({ id });

        if (!band) {
            return res.status(404).json({ message: 'Banda não encontrada' });
        }

        await AppDataSource.getRepository(Band).delete(id);
        return res.status(204).send();
    } catch (error) {
        console.error('Error deleting Band:', error);
        return res.status(500).json({ message: 'Erro ao deletar banda', error: error.message });
    }
};
