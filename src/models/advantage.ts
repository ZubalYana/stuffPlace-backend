import mongoose, { Schema, Document } from "mongoose";

export interface IAdvantage extends Document {
    text: {
        en: string;
        hu: string;
    };
    icon: string;
    type: string;
}

const AdvantageSchema = new Schema<IAdvantage>({
    text: {
        en: { type: String, required: true },
        hu: { type: String, required: true },
    },
    icon: { type: String, required: true },
    type: { type: String, required: true },
});

export const Advantage = mongoose.model<IAdvantage>("Advantage", AdvantageSchema);