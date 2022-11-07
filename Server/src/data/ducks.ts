import { query } from "../lib/db";

export const getDucksList = async () => {
  try {
    const sql = `SELECT * FROM ducks`;
    const list = await query(sql);
    return list;
  } catch (err) {
    console.log(err);
  }
};
