import express from "express";

const app = express();

const PORT = 3003;

app.listen(3003, () => {
  console.log(`listening on localhost:${PORT}`)
})