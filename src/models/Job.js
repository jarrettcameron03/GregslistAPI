import { Schema } from "mongoose";

export const JobSchema = new Schema({
    company: { type: String, required: true, minLength: 0, maxLength: 100 },
    jobTitle: { type: String, required: true, minLength: 0, maxLength: 100 },
    hours: { type: Number, required: true, min: 1, max: 168 },
    rate: { type: Number, required: true, min: 1, max: 100000000 },
    imgUrl: { type: String, required: true, minLength: 0, maxLength: 500 },
    description: { type: String, minLength: 0, maxLength: 500 },
}, { timestamps: true })