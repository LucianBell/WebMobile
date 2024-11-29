import { Router, Request, Response } from "express";
import { authenticateToken } from "../middleware/authMiddleware";

// Extend Request inline for this file
interface AuthenticatedRequest extends Request {
    user?: { id: number; username: string };
}

const router = Router();

router.get("/welcome", authenticateToken, (req: AuthenticatedRequest, res: Response) => {
    const username = req.user?.username || "Guest";
    res.json({ message: `Welcome, ${username}!` });
});

export default router;
