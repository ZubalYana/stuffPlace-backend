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
        const {
            occupancy,
            type,
            comfortLevel,
            description,
        } = req.body;

        const parsedType = JSON.parse(type);
        const parsedComfort = JSON.parse(comfortLevel);
        const parsedDescription = JSON.parse(description);

        const images = (req.files as Express.Multer.File[]).map(
            (file) => file.path
        );

        const unit = await Unit.create({
            occupancy,
            type: parsedType,
            comfortLevel: parsedComfort,
            description: parsedDescription,
            images,
        });

        res.status(201).json(unit);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create unit" });
    }
};

export const updateUnit = async (req: Request, res: Response) => {
    try {
        const unit = await Unit.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    ...(req.body.description && {
                        "description.en": req.body.description.en,
                        "description.hu": req.body.description.hu,
                    }),
                    ...(req.body.type && {
                        "type.en": req.body.type.en,
                        "type.hu": req.body.type.hu,
                    }),
                    ...(req.body.comfortLevel && {
                        "comfortLevel.en": req.body.comfortLevel.en,
                        "comfortLevel.hu": req.body.comfortLevel.hu,
                    }),
                    ...(req.body.occupancy !== undefined && {
                        occupancy: req.body.occupancy,
                    }),
                    ...(req.body.img && { img: req.body.img }),
                },
            },
            { new: true }
        );

        if (!unit) {
            return res.status(404).json({ message: "Unit not found" });
        }

        res.json(unit);
    } catch (err) {
        res.status(400).json({
            message: "Failed to update unit",
            error: err,
        });
    }
};
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