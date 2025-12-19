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
    images: string[];
    highlighted: boolean;
}

const UnitSchema = new Schema<IUnit>({
    description: {
        en: { type: String, required: true },
        hu: { type: String, required: true },
    },
    occupancy: { type: Number, required: true },
    type: {
        en: { type: String, required: true },
        hu: { type: String, required: true },
    },
    comfortLevel: {
        en: { type: String, required: true },
        hu: { type: String, required: true },
    },
    images: {
        type: [String],
        required: true,
        default: [],
    },
    highlighted: { type: Boolean, default: false }
});

export const Unit = mongoose.model<IUnit>("Unit", UnitSchema);
