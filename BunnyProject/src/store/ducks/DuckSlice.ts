import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../App";
import { Duck } from "./interface";
import { initialState } from "./initial";
import { randomNumber, colorIndex } from "../../util";

const duckSlice = createSlice({
  name: "ducks",
  initialState,
  reducers: {
    addDuck(state) {
      const length: number = state.ducks.length;
      const nextId: number = length ? state.ducks[length - 1].id + 1 : 1;
      const newDuck: Duck = {
        id: nextId,
        name: "new Duck",
        cuteness: randomNumber(),
        color: colorIndex[randomNumber()],
      };
      state.ducks.push(newDuck);
    },
  },
});

export const { addDuck } = duckSlice.actions;
export default duckSlice.reducer;
