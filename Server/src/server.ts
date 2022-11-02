import express, { Application } from "express";
import { bunnyRoute } from "./route/bunnies";
import config from "../config";
import createConnectionPool from '@databases/pg';

import { pool } from "./lib/db";


const app: Application = express();
const port = config.PORT;

app.use("/bunnies", bunnyRoute);

const connectDb = async () => {
  try {
    await pool.connect();
    const res = await pool.query("SELECT * FROM Bunnies");
    console.log(res);
    await pool.end();
  } catch (error) {
    console.log(error);
  }
};

connectDb();

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
