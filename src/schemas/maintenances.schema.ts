import { Schema } from "mongoose";
import IMaintenances from "../interfaces/Maintenances.interface";

export const maintenancesSchema = new Schema<IMaintenances>({
  description: { type: String, required: true },
  carId: { type: Number, required: true },
  date: { type: Date, required: true },
})
