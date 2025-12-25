import { Request, Response } from "express";
import { Facility } from "../models/facility";

export const getFacilities = async (_req: Request, res: Response) => {
    try {
        const facilities = await Facility.find().sort({ createdAt: 1 });
        res.json(facilities);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch facilities" });
    }
};

export const createFacility = async (req: Request, res: Response) => {
    try {
        const { title, text, icon } = req.body;

        if (!title?.en || !title?.hu || !text?.en || !text?.hu || !icon) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const facility = await Facility.create({
            title,
            text,
            icon,
        });

        res.status(201).json(facility);
    } catch (err) {
        res.status(500).json({ message: "Failed to create facility" });
    }
};

export const updateFacility = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const updated = await Facility.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Facility not found" });
        }

        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: "Failed to update facility" });
    }
};

export const deleteFacility = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleted = await Facility.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Facility not found" });
        }

        res.json({ message: "Facility deleted" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete facility" });
    }
};
