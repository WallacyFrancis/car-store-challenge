import mongoose from "mongoose";
import "dotenv/config";

const MONGO_DB_URL = 'mongodb://localhost:27017/'

const options = {
  user: 'root', // Usuário do banco de dados.
  pass: 'root', // senha do usuário do banco de dados.
  dbName: 'maintenances', // Define qual banco de dados você irá utilizar.
};

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
  || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI, options);

export default connectToDatabase;
