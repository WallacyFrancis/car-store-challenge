// docker exer postgres
// docker exec -it postgres psql -U root -d postgres
import dotenv from "dotenv"
import app from "./servers/express/app"
import connectToDatabase from "./mongo/model/ConnectionMDB";

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
