import { Bunny, colorChoice } from "./store/bunny/interface";

export const randomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const dataArrayCuteness = (data: Bunny[]) => {
  const cute = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  data.map((bunny) => {
    cute[bunny.cuteness - 1]++;
  });
  return cute;
};

export const colorIndex: colorChoice = {
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
