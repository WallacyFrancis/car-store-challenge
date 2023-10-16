import express, { Request, Response } from "express";
import router from "../../routes/router";

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('Server Ok!')
});

app.use(router);

export default app;