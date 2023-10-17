"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const MONGO_DB_URL = 'mongodb://localhost:27017/';
const options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    dbName: process.env.DB_MONGO_NAME,
};
const connectToDatabase = (mongoDatabaseURI = process.env.MONGO_DB_URL
    || MONGO_DB_URL) => mongoose_1.default.connect(mongoDatabaseURI, options);
exports.default = connectToDatabase;
