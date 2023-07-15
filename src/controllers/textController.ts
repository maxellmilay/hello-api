import { Request, Response } from 'express';

export function displayHello(req: Request, res: Response) {
  res.status(200).send('HELLO THERE');
}
