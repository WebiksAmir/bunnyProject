import express, { Request, Response } from "express";
export const bunnyRoute = express.Router();
import { getBunniesList,insertBunny } from "../data/bunnies";

bunnyRoute.get("/", async (req: Request, res: Response) => {
  try {
    const user = await getBunniesList();
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

bunnyRoute.post("/", async (req: Request, res: Response) => {
  try {
    const { id, name, cuteness, color } = req.body;
    const bunny = await insertBunny(id, name, cuteness, color);
    res.send(bunny);
  } catch (err) {
    console.log(err);
  }
});
