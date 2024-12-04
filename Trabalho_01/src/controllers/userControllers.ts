import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Replace with an environment variable in production

// Register a new user
export const register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        const userRepository = AppDataSource.getRepository(User);

        // Check if user already exists
        const existingUser = await userRepository.findOne({ where: { username } });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the user
        const user = userRepository.create({ username, password: hashedPassword });
        await userRepository.save(user);

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Login a user
export const login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        // Verificar se o username e password são exatamente os permitidos
        if (username === "aluno@teste.com" && password === "teste") {
            // Gerar um token JWT
            const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });

            return res.status(200).json({ message: "Login successful", token });
        }

        // Caso as credenciais não correspondam
        return res.status(401).json({ message: "Invalid credentials" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};