import { Contacts } from "../models/contacts";
import { Request, Response } from "express";

export const getContacts = async (_req: Request, res: Response) => {
    try {
        const contacts = await Contacts.findOne();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch contacts" });
    }
};

export const upsertContacts = async (req: Request, res: Response) => {
    try {
        const updated = await Contacts.findOneAndUpdate(
            {},
            req.body,
            { new: true, upsert: true }
        );

        res.json(updated);
    } catch {
        res.status(500).json({ message: "Failed to save contacts" });
    }
};
