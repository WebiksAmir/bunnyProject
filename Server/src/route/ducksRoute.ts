import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { getDucksList } from "../data/ducks";

export const duckRoute = express();

const httpServer = createServer(duckRoute);
const io = new Server(httpServer, {
  //   cors: {
  //     origin: "http://localhost:3000",
  //     credentials: true,
  //   },
});

io.on("connection", (socket: Socket) => {
  console.log(`User connected to ${socket.id}`);

  socket.on("getDucks", async () => {
    try {
      const list:any = await getDucksList();
      console.log(list.rows);
      socket.emit("All ducks", list.rows );
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("addDuck", (socket) => {
    try {
      console.log(socket);
      //   const list = getDucksList();
      //   console.log(list);
      socket.emit("Duck added", { socket });
    } catch (err) {
      console.log(err);
    }
  });
});

httpServer.listen(4000, function () {
  console.log("Socket listening on 4000");
});
