import { useState, useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { addBunny, deleteBunny,getAllBunnies } from "./store/bunnySlice";
import ListRender from "./components/ListRender";

function App() {
  useEffect(() => {
    dispatch(getAllBunnies())
  }, [])

  const bunnyState = useAppSelector((state) => state.bunny);
  const dispatch = useAppDispatch();

  const [id, setID] = useState<string>("0");

  return (
    <div className="App">
      {bunnyState.loading && <div>Loading...</div>}
      {!bunnyState.loading && (
        <div>
          {bunnyState.bunnies.map((bunny) => {
            return <ListRender key={bunny.id} bunny={bunny} />;
          })}
          <button onClick={() => dispatch(addBunny())}>add Random Bunny</button>
          <button onClick={() => dispatch(deleteBunny(id))}>
            delete Bunny
          </button>
          <input
            type="number"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
