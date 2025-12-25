import mongoose, { Schema, Document } from "mongoose";

export interface IFacility extends Document {
    title: {
        en: string;
        hu: string;
    };
    text: {
        en: string;
        hu: string;
    };
    icon: string;
}

const FacilitySchema = new Schema<IFacility>(
    {
        title: {
            en: { type: String, required: true },
            hu: { type: String, required: true },
        },
        text: {
            en: { type: String, required: true },
            hu: { type: String, required: true },
        },
        icon: { type: String, required: true },
    },
    { timestamps: true }
);

export const Facility = mongoose.model<IFacility>(
    "Facility",
    FacilitySchema
);
