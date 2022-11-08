import { useState, useEffect } from "react";
import "./App.css";
import { bunnyState, duckState, useAppDispatch } from "./store/selectors";
import {
  addBunny,
  deleteBunny,
  getAllBunnies,
  addBunnyToDB,
} from "./store/bunny/bunnySlice";
import { setAllDucks } from "./store/ducks/DuckSlice";
import ListRender from "./components/ListRender";
import { useSelector } from "react-redux";
import { Bunny } from "./store/bunny/interface";
import { Duck } from "./store/ducks/interface";
import BunnyDoughnut from "./components/BunnyDoughnut";
import DucksVsBunnies from "./components/DucksVsBunnies";
import { io, Socket } from "socket.io-client";
export const socket: Socket = io("http://localhost:4000");

// import socketIOClient from "socket.io-client";

export const URL = "http://localhost:8000";

function App() {
  useEffect(() => {
    dispatch(getAllBunnies());
  }, []);

  const getDucks = () => {
    socket.emit("getDucks");
  };
  useEffect(() => {
    socket.on(`connected`, () => {
      console.log("connected to socket");
    });
    socket.on("DucksDB", (payload: Duck[]) => {
      dispatch(setAllDucks(payload));
    });
    return () => {
      socket.off('connected');
      socket.off("DucksDB");
    };
  }, []);

  const dispatch = useAppDispatch();
  const myBunnyState = useSelector(bunnyState);
  const myDuckState = useSelector(duckState);
  const loading = myBunnyState.loading && myDuckState.loading;
  const [id, setID] = useState<string>("0");

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          {myBunnyState.bunnies.length &&
            myBunnyState.bunnies.map((bunny: Bunny) => {
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
      <button onClick={getDucks}>getDucks</button>
    </div>
  );
}

export default App;
