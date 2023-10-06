import { Schema } from "mongoose";

export const maintenancesSchema = new Schema({
  description: { type: String, required: true },
  carId: { type: Number, required: true },
  date: { type: Date, required: true },
})
