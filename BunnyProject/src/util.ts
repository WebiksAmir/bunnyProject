import { Bunny } from "./interfaces";

export const randomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const dataArrayCuteness = (data: Bunny[]) => {
  const cute = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  data.map((bunny) => {
    cute[bunny.cuteness - 1]++;
  });
  console.log(cute)
  return cute;
};
