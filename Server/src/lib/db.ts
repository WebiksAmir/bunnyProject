import { Pool } from "pg";
import config from "../../config";

export const pool = new Pool({
  user: config.PG_USER,
  host: config.PG_HOST,
  database: config.PG_DATABASE,
  password: config.PG_PW,
  port: config.PG_PORT,
});

export const query = (sql: string) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
