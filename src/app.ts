import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' } );
});

export default app;
