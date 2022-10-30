import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bunny } from "../interfaces";
import { randomNumber } from "../util";

const initialState: Bunny[] = [
  {
    id: 1,
    name: "Snow",
    color: "white",
    cuteness: 10,
  },
];

interface colorChoice {
  [key: number]: string;
}
const colorIndex: colorChoice = {
  1: "white",
  2: "brown",
  3: "grey",
  4: "blue",
  5: "green",
  6: "red",
  7: "yellow",
  8: "orange",
  9: "pink",
  10: "black",
};

const bunnySlice = createSlice({
  name: "bunnies",
  initialState,
  reducers: {
    addBunny(state) {
      const length: number = state.length;
      const nextId: number = length ? state[length - 1].id + 1 : 1;
      const newBunny: Bunny = {
        id: nextId,
        name: "new Rabbit",
        cuteness: randomNumber(),
        color: colorIndex[randomNumber()],
      };
      state.push(newBunny);
    },
    deleteBunny(state, action: PayloadAction<number>) {
      return state.filter((bunny) => bunny.id !== action.payload);
    },
  },
});

export const { addBunny, deleteBunny } = bunnySlice.actions;
export default bunnySlice.reducer;
