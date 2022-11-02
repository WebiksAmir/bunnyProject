import express, { Request, Response } from "express";
export const bunnyRoute = express.Router();

bunnyRoute.get("/", (req: Request, res: Response) => {
  res.send([
    {
      id: 0,
      name: "Snowball",
      cuteness: 10,
      color: "white",
    },
  ]);
});
