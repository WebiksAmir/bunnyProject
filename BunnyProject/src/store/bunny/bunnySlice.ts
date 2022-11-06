import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../App";
import { Bunny } from "./interface";
import { initialState } from "./initial";
import { randomNumber, colorIndex } from "../../util";
import axios from "axios";
import { toggleLoading } from "../loading/loadingSlice";
import { useAppDispatch } from "../selectors";
import { useDispatch } from "react-redux";

export const getAllBunnies = createAsyncThunk("bunnies/getAllBunnies", () => {
  return axios.get(`${URL}/bunnies`).then((response) => response.data.rows);
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
      toggleLoading()
    });
    builder.addCase(getAllBunnies.fulfilled, (state, action) => {
      state.bunnies = action.payload;
    });
    builder.addCase(getAllBunnies.rejected, (state, action) => {
      console.log("X");
      console.log(action.error.message);
    });
  },
});

// export const bunniesArray = (state: any)=> state.bunnies

export const { addBunny, deleteBunny } = bunnySlice.actions;
export default bunnySlice.reducer;
