import express, { Request, Response } from "express";
export const bunnyRoute = express.Router();
import { getFullUsersList,insertBunny } from "../data/bunnies";

bunnyRoute.get("/", async (req: Request, res: Response) => {
  try {
    const user = await getFullUsersList();
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

bunnyRoute.post("/", async (req: Request, res: Response) => {
  try {
    console.log("-------------------------------Request-------------------------------------")
    console.log(req.body)
    const { id, name, cuteness, color } = req.body;
    const bunny = await insertBunny(id, name, cuteness, color);
    res.send(bunny);
  } catch (err) {
    console.log(err);
  }
});