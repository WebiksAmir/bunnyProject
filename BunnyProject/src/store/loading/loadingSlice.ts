import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBunnies } from "../bunny/bunnySlice";
import { initialState } from "./initial";

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBunnies.pending, (state, action) => {
      state.error = "";
      toggleLoading();
    });
    builder.addCase(getAllBunnies.fulfilled, (state, action) => {
      toggleLoading();
    });
    builder.addCase(getAllBunnies.rejected, (state, action) => {
      toggleLoading();
      state.error = action.error.message;
      console.log(action.error.message);
    });
  },
});

export const selectLoading = (state: any) => state.loading.loading;
export const { toggleLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
