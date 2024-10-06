import express, { Request, Response } from 'express';
import config from '../config';
import interviewer from './LLM/gemini';

interviewer("React is a javascript library.");

const app: express.Application = express();
const port: number = config.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
