import dotenv from "dotenv"
import app from './app'
import connectToDatabase from "../../models/ConnectionMDB";

dotenv.config();

const PORT = Number(process.env.PORT) || 8080;

connectToDatabase()
  .then(() => app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`)
  }))
  .catch(error => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
  })