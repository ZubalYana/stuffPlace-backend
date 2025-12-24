import mongoose, { Schema, Document } from "mongoose";

export interface IText extends Document {
    mainDescription: {
        en: {
            text: string;
            highlights: string[];
        };
        hu: {
            text: string;
            highlights: string[];
        };
    },
    aboutUsText: {
        en: {
            text: string;
            highlights: string[];
        };
        hu: {
            text: string;
            highlights: string[];
        };
    },
    advantagesText: {
        en: string;
        hu: string;
    },
    unitsText: {
        en: string;
        hu: string;
    },
    facilitiesText: {
        en: string;
        hu: string;
    },
    footerSubtext: {
        en: string;
        hu: string;
    },
}

const TextSchema = new Schema<IText>({
    mainDescription: {
        en: {
            text: { type: String, required: true },
            highlights: { type: [String], default: [] },
        },
        hu: {
            text: { type: String, required: true },
            highlights: { type: [String], default: [] },
        }
    },
    aboutUsText: {
        en: {
            text: { type: String, required: true },
            highlights: { type: [String], default: [] },
        },
        hu: {
            text: { type: String, required: true },
            highlights: { type: [String], default: [] },
        }
    },
    advantagesText: {
        en: { type: String, required: true },
        hu: { type: String, required: true },
    },
    unitsText: {
        en: { type: String, required: true },
        hu: { type: String, required: true },
    },
    facilitiesText: {
        en: { type: String, required: true },
        hu: { type: String, required: true },
    },
    footerSubtext: {
        en: { type: String, required: true },
        hu: { type: String, required: true },
    },
})

export const Text = mongoose.model<IText>("Text", TextSchema);