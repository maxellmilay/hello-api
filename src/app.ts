import express, { Application, Request, Response } from 'express';
import TextRouter from './routes/textRouter';

const app: Application = express();

const PORT: number = 3001;

app.use('/text', TextRouter);

app.use('/', (req: Request, res: Response): void => {
  res.status(200).send('ROOT SEVER ROUTE');
});

app.use('*', (req: Request, res: Response): void => {
  res.status(404).send('Error 404: PAGE NOT FOUND');
});

app.listen(PORT, (): void => {
  console.log('SERVER RUNNING ON PORT: ', PORT);
});
