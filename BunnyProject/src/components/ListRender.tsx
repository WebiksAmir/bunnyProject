import React from "react";
import { Bunny } from "../interfaces";

interface AppProps {
  bunny: Bunny;
}

export default function ListRender({ bunny }: AppProps) {
  return (
    <li>
      <div>Id: {bunny.id}</div>
      <div>Name: {bunny.name}</div>
      <div>Cuteness: {bunny.cuteness}</div>
      <div>Color: {bunny.color}</div>
    </li>
  );
}
