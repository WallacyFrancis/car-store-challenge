import mongoose from "mongoose";
import "dotenv/config";

const MONGO_DB_URL = 'mongodb://localhost:27017/'

const options = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  dbName: process.env.DB_MONGO_NAME, 
};

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_DB_URL
  || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI, options);

export default connectToDatabase;
