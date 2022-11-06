import { configureStore } from "@reduxjs/toolkit";
import bunnyReducer from "./bunny/bunnySlice";
import duckReducer from "./ducks/DuckSlice"
import loadingReducer from "./loading/loadingSlice";

export const store = configureStore({
  reducer: {
    bunny: bunnyReducer,
    duck: duckReducer,
    loading: loadingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;