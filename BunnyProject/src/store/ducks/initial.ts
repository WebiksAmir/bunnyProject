import { Store } from "./interface";

export const initialState: Store = {
  ducks: [
    { id: 1, name: "quack1", cuteness: 5, color: "grey" },
    { id: 2, name: "quack2", cuteness: 1, color: "white" },
    { id: 3, name: "quack3", cuteness: 5, color: "black" },
    { id: 4, name: "quack4", cuteness: 10, color: "black" },
    { id: 5, name: "quack5", cuteness: 7, color: "grey" },
  ],
  loading: false,
  error: "",
};
