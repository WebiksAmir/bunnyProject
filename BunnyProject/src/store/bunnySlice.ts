import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Bunny {
  id: number;
  name: string;
  color: string;
  cuteness: number;
}

const initialState: Bunny[] = [
  {
    id: 1,
    name: "Snow",
    color: "white",
    cuteness: 10,
  },
];

const bunnySlice = createSlice({
  name: "bunnies",
  initialState,
  reducers: {
    addBunny(state) {
      state.push({
        id: state.length + 1,
        name: "New Bunny",
        color: "black",
        cuteness: 0,
      });
    },
    deleteBunny(state, action: PayloadAction<number>) {
      return state.filter(bunny => bunny.id !== action.payload);
    },
  },
});

export const { addBunny, deleteBunny } = bunnySlice.actions;
export default bunnySlice.reducer;
