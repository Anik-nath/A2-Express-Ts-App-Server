import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const assignmentNo: number = 2;

  res.send(`Express and Typescript project assignment ${assignmentNo} server`);
});
export default app;
