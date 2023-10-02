// docker exer postgres
// docker exec -it postgres psql -U root -d postgres
import dotenv from "dotenv"
import app from "./app"

dotenv.config();

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`)
})