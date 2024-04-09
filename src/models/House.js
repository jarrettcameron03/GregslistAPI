import { Schema } from "mongoose";

export const HouseSchema = new Schema({
    bedrooms: { type: Number, required: true, min: 0, max: 30 },
    bathrooms: { type: Number, required: true, min: 0, max: 25 },
    levels: { type: Number, required: true, min: 1, max: 4 },
    imgUrl: { type: String, required: true, minLength: 0, maxLength: 500 },
    year: { type: Number, required: true, min: 1000, max: 2024 },
    price: { type: Number, required: true, min: 0, max: 10000000 },
    description: { type: String, minLength: 0, maxLength: 500 }
}, { timestamps: true })