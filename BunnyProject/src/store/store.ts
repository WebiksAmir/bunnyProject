import { configureStore } from "@reduxjs/toolkit";
import bunnyReducer from "./bunny/bunnySlice";
import duckReducer from "./ducks/DuckSlice"

export const store = configureStore({
  reducer: {
    bunny: bunnyReducer,
    duck: duckReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;