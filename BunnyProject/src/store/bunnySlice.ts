import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Bunny } from "../interfaces";
import { randomNumber } from "../util";
import axios from "axios";

const initialState: {
  loading: boolean;
  bunnies: Bunny[];
  error: string | undefined;
} = {
  loading: false,
  bunnies: [],
  error: "",
};

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

const URL = "http://localhost:8000";

export const getAllBunnies = createAsyncThunk("bunnies/getAllBunnies", () => {
  return axios.get(`${URL}/bunnies`).then((response) => response.data);
});

const bunnySlice = createSlice({
  name: "bunnies",
  initialState,
  reducers: {
    addBunny(state) {
      const length: number = state.bunnies.length;
      const nextId: number = length ? state.bunnies[length - 1].id + 1 : 1;
      const newBunny: Bunny = {
        id: nextId,
        name: "new Rabbit",
        cuteness: randomNumber(),
        color: colorIndex[randomNumber()],
      };
      state.bunnies.push(newBunny);
    },
    deleteBunny(state, action: PayloadAction<string>) {
      const newArray = state.bunnies.filter(
        (bunny) => bunny.id !== parseInt(action.payload)
      );
      return { ...state, bunnies: newArray };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBunnies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllBunnies.fulfilled, (state, action) => {
      state.loading = false;
      state.bunnies = action.payload;
      state.error = "";
    });
    builder.addCase(getAllBunnies.rejected, (state, action) => {
      state.loading = false;
      state.bunnies = [];
      state.error = action.error.message;
    });
  },
});

export const { addBunny, deleteBunny } = bunnySlice.actions;
export default bunnySlice.reducer;
