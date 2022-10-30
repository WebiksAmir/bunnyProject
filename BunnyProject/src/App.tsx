import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { addBunny } from "./store/bunnySlice";

function App() {
  const bunnyArray = useAppSelector((state) => state.bunny);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addBunny());
  };

  return (
    <div className="App">
      <div>{JSON.stringify(bunnyArray)}</div>
      <button onClick={handleClick}>add Bunny</button>
    </div>
  );
}

export default App;
