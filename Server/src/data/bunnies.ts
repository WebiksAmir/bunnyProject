import { query } from "../lib/db";

export async function getFullUsersList() {
  try {
    const sql = `SELECT * FROM bunnies`;
    const list = await query(sql);
    return list;
  } catch (err) {
    console.log(err);
  }
}

export async function insertBunny(id:number, name:string, cuteness:number, color:string) {
  try {
    const sql = `INSERT INTO bunnies (id, name, cuteness, color) VALUES ('${id}','${name}', '${cuteness}','${color}')`;
    const list = await query(sql);
    return list;
  } catch (err) {
    console.log(err);
  }
}
