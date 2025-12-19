import { Request, Response } from 'express';

export const uploadUnitImage = async (req: Request, res: Response) => {
    try {
        if (!req.file || !req.file.path) {
            return res.status(400).json({ message: "No file uploaded" })
        }
        res.status(201).json({ message: "Image uploaded successfully", url: req.file.path })
    } catch (err) {
        res.status(500).json({ message: "Image upload failed", error: err })
    }
}