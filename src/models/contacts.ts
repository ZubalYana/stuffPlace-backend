import mongoose, { Schema, Document } from "mongoose";

export interface IContacts extends Document {
    phone: string,
    email: string,
    facebook: string,
    instagram: string,
    telegram: string,
    location: string
}

const ContactsSchema = new Schema<IContacts>({
    phone: { type: String, required: true },
    email: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    telegram: { type: String },
    location: { type: String }
})

export const Contacts = mongoose.model<IContacts>("Contacts", ContactsSchema);