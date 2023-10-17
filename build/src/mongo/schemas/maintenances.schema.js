"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maintenancesSchema = void 0;
const mongoose_1 = require("mongoose");
exports.maintenancesSchema = new mongoose_1.Schema({
    description: { type: String, required: true },
    carId: { type: Number, required: true },
    date: { type: String, required: true },
});
