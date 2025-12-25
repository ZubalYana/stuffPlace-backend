import { Request, Response } from "express";
import { Advantage } from "../models/advantage";


export const createAdvantage = async (req: Request, res: Response) => {
    try {
        const { text, icon, type } = req.body;

        if (!text?.en || !text?.hu || !icon || !type) {
            return res.status(400).json({
                message: "Missing required fields",
            });
        }

        const advantage = await Advantage.create({
            text,
            icon,
            type,
        });

        res.status(201).json(advantage);
    } catch (error) {
        console.error("Create advantage error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const updateAdvantage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { text, icon, type } = req.body;

        const updated = await Advantage.findByIdAndUpdate(
            id,
            {
                ...(text && { text }),
                ...(icon && { icon }),
                ...(type && { type }),
            },
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({
                message: "Advantage not found",
            });
        }

        res.json(updated);
    } catch (error) {
        console.error("Update advantage error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const deleteAdvantage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleted = await Advantage.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({
                message: "Advantage not found",
            });
        }

        res.json({ message: "Advantage deleted successfully" });
    } catch (error) {
        console.error("Delete advantage error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getAdvantages = async (_req: Request, res: Response) => {
    try {
        const advantages = await Advantage.find().sort({ createdAt: -1 });
        res.json(advantages);
    } catch (error) {
        console.error("Get advantages error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
