import { query } from "../lib/db";

export const getBunniesList = async () => {
  try {
    const sql = `SELECT * FROM bunnies`;
    const list = await query(sql);
    return list;
  } catch (err) {
    console.log(err);
  }
};

export const insertBunny = async (
  id: number,
  name: string,
  cuteness: number,
  color: string
) => {
  try {
    const sql = `INSERT INTO bunnies (id, name, cuteness, color) VALUES ('${id}','${name}', '${cuteness}','${color}')`;
    const list = await query(sql);
    return list;
  } catch (err) {
    console.log(err);
  }
};
