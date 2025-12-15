import { Request, Response } from "express"
import { Unit } from "../models/unit"

export const getUnits = async (req: Request, res: Response) => {
    try {
        const units = await Unit.find()
        res.json(units);
    } catch (err) {
        res.status(400).json({ message: 'Failed to get units' });
    }
}
export const createUnit = async (req: Request, res: Response) => {
    try {
        const unit = await Unit.create(req.body);
        res.status(200).json(unit);
    } catch (err) {
        res.status(400).json({ message: 'Failed to create unit:', err });
    }
}
export const updateUnit = async (req: Request, res: Response) => {
    try {
        const unit = await Unit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!unit) {
            return res.status(404).json({ message: 'Unit not found' });
        }
    } catch (err) {
        res.status(400).json({ message: 'Failed to update unit:', err })
    }
}
export const deleteUnit = async (req: Request, res: Response) => {
    try {
        const unit = await Unit.findByIdAndDelete(req.params.id);

        if (!unit) {
            return res.status(404).json({ message: 'Unit not found' });
        }

        res.json({ message: 'Unit deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Failed to delete unit:', err })
    }
}