import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Admin } from "../models/admin";
import { generateToken } from "../utils/jwt";

export async function login(req: Request, res: Response) {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, admin.passwordHash);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(admin._id.toString());
    res.json({ token });
}
