import { configureStore } from "@reduxjs/toolkit";
import bunnyReducer from "./bunnySlice";

export const store = configureStore({
  reducer: {
    bunny: bunnyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;