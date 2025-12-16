import mongoose, { Schema, Document } from "mongoose";

export interface IUnit extends Document {
    description: {
        en: string;
        hu: string;
    };
    occupancy: number;
    type: {
        en: string;
        hu: string;
    };
    comfortLevel: {
        en: string;
        hu: string;
    };
    img: string;
}

const UnitSchema = new Schema<IUnit>({
    description: {
        en: { type: String },
        hu: { type: String },
    },
    occupancy: { type: Number },
    type: {
        en: { type: String },
        hu: { type: String },
    },
    comfortLevel: {
        en: { type: String },
        hu: { type: String },
    },
    img: { type: String },
});

export const Unit = mongoose.model<IUnit>("Unit", UnitSchema);
