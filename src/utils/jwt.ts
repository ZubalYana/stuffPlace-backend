import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "stuffplace_secretKey";
const JWT_EXPIRES_IN = "1h";

export function generateToken(adminId: string) {
    return jwt.sign({ id: adminId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}