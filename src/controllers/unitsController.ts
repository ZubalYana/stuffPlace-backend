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
        const { description, occupancy, type, comfortLevel } = req.body;
        const parsedDescription = description ? JSON.parse(description) : {};
        const parsedType = type ? JSON.parse(type) : {};
        const parsedComfortLevel = comfortLevel ? JSON.parse(comfortLevel) : {};

        const imgUrl = req.file?.path;

        const unit = await Unit.create({
            description: {
                en: parsedDescription.en,
                hu: parsedDescription.hu,
            },
            occupancy: Number(occupancy),
            type: {
                en: parsedType.en,
                hu: parsedType.hu,
            },
            comfortLevel: {
                en: parsedComfortLevel.en,
                hu: parsedComfortLevel.hu,
            },
            img: imgUrl,
        });

        res.status(201).json(unit);
    } catch (err) {
        res.status(400).json({
            message: "Failed to create unit",
            error: err,
        });
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