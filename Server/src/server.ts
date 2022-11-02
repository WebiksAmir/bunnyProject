import express, { Application, Request, Response,Router  } from "express";
import {bunnyRoute} from "./route/bunnies"

const app: Application = express()
const port: number = 8000

app.use("/bunnies", bunnyRoute);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });