import { Request, Response } from "express"
import { Unit } from "../models/unit"

export const toggleHighlighted = async (req: Request, res: Response) => {
    try {
        const unit = await Unit.findById(req.params.id);

        if (!unit) {
            return res.status(404).json({ message: "Unit not found" });
        }

        unit.highlighted = !unit.highlighted;
        await unit.save();

        res.json(unit);
    } catch (err) {
        res.status(500).json({ message: "Failed to toggle highlight" });
    }
};
