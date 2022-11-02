import express, { Application, Request, Response } from "express";
const app: Application = express()

const port: number = 8000

app.get('/bunnies', (req: Request, res: Response) => {
    res.send({
        id: 0,
        name: "Snowball",
        cuteness: 10,
        color: "white",
      });
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });