import { Request, Response } from "express";
import { Text } from "../models/text";

const isEmpty = (value?: string) =>
    !value || value.trim().length === 0;


export const getText = async (req: Request, res: Response) => {
    try {
        const text = await Text.findOne();
        res.json(text);
    } catch (err) {
        res.status(400).json({ message: 'Error getting text from the server' });
    }
}

export const uploadText = async (req: Request, res: Response) => {
    try {
        const {
            mainDescription,
            aboutText,
            advantagesText,
            unitsText,
            facilitiesText,
            footerSubtext,
        } = req.body;

        if (
            isEmpty(mainDescription?.en?.text) ||
            isEmpty(mainDescription?.hu?.text) ||
            isEmpty(aboutText?.en?.text) ||
            isEmpty(aboutText?.hu?.text) ||
            isEmpty(advantagesText?.en) ||
            isEmpty(advantagesText?.hu) ||
            isEmpty(unitsText?.en) ||
            isEmpty(unitsText?.hu) ||
            isEmpty(facilitiesText?.en) ||
            isEmpty(facilitiesText?.hu) ||
            isEmpty(footerSubtext?.en) ||
            isEmpty(footerSubtext?.hu)
        ) {
            return res.status(400).json({
                message: "All text fields in both languages are required",
            });
        }

        const existingText = await Text.findOne();

        if (existingText) {
            existingText.mainDescription = mainDescription;
            existingText.aboutUsText = aboutText;
            existingText.advantagesText = advantagesText;
            existingText.unitsText = unitsText;
            existingText.facilitiesText = facilitiesText;
            existingText.footerSubtext = footerSubtext;

            await existingText.save();

            return res.json({
                message: "Text updated successfully",
                data: existingText,
            });
        }

        const newText = await Text.create({
            mainDescription,
            aboutUsText: aboutText,
            advantagesText,
            unitsText,
            facilitiesText,
            footerSubtext,
        });

        res.status(201).json({
            message: "Text created successfully",
            data: newText,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error uploading text on the server",
        });
    }
};
