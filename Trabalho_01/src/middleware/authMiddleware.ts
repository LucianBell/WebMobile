import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Define the type for the JWT payload
interface JwtPayload {
    id: number;
    username: string;
}

// Extend the Request interface inline
interface AuthenticatedRequest extends Request {
    user?: JwtPayload;
}

export const authenticateToken = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.header("Authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        req.user = decoded; // Attach the decoded user to the request
        next();
    } catch (err) {
        return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
};
