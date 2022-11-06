import { useState, useEffect } from "react";
import "./App.css";
import { bunnyState, duckState , useAppDispatch, loadingState } from "./store/selectors";
import { addBunny, deleteBunny, getAllBunnies } from "./store/bunny/bunnySlice";
import ListRender from "./components/ListRender";
import { useSelector } from "react-redux";
import { Bunny } from "./store/bunny/interface";
import BunnyDoughnut from "./components/BunnyDoughnut";
import DucksVsBunnies from "./components/DucksVsBunnies";

export const URL = "http://localhost:8000";
 
function App() {
  useEffect(() => {
    dispatch(getAllBunnies());
  }, []);

  const dispatch = useAppDispatch();
  const myBunnyState = useSelector(bunnyState).bunnies;
  const myLoadingState = useSelector(loadingState);
  const [id, setID] = useState<string>("0");

  return (
    <div className="App">
      {myLoadingState.loading && <div>Loading...</div>}
      {!myLoadingState.loading && (
        <div>
          {myBunnyState.map((bunny: Bunny) => {
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
          <BunnyDoughnut />
          <DucksVsBunnies />
        </div>
      )}
    </div>
  );
}

export default App;
