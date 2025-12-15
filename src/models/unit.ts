import mongoose, { Schema, Document } from "mongoose";

export interface IUnit extends Document {
    description: string;
    occupancy: number;
    type: string;
    comfortLevel: string;
    img: string;
}

const UnitSchema = new Schema<IUnit>({
    description: { type: String },
    occupancy: { type: Number },
    type: { type: String },
    comfortLevel: { type: String },
    img: { type: String }
})

export const Unit = mongoose.model<IUnit>("Unit", UnitSchema)