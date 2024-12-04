import { Request, Response } from "express";
import { AppDataSource } from "../data-source";

export const healthCheck = async (req: Request, res: Response) => {
    const uptime = process.uptime();
    const uptimeFormatted = new Date(uptime * 1000).toISOString().substr(11, 8); // Formato HH:MM:SS

    return res.status(200).json({
        status: "UP",
        uptime: uptimeFormatted,
        timestamp: new Date().toISOString(),
        message: "Healthcheck OK"
    });
};
