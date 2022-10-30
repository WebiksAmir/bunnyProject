import { useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { addBunny, deleteBunny } from "./store/bunnySlice";
import ListRender from "./components/listRender";

function App() {
  const bunnyArray = useAppSelector((state) => state.bunny);
  const dispatch = useAppDispatch();

  const [id, setID] = useState<number>(0);

  return (
    <div className="App">
      {bunnyArray.map((bunny) => {
        return <ListRender key={bunny.id} bunny={bunny} />;
      })}
      <button onClick={() => dispatch(addBunny())}>add Bunny</button>
      <button onClick={() => dispatch(deleteBunny(id))}>delete Bunny</button>
      <input
        type="number"
        value={id}
        onChange={(e) => {
          if (e.target.value !== "") setID(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

export default App;
