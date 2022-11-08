import express, { Request, Response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { getDucksList } from "../data/ducks";

export const duckRoute = express();

const httpServer = require("http").Server(duckRoute);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
    credentials: false,
  },
});

io.on("connection", (socket: Socket) => {
  console.log(`User connected to ${socket.id}`);
  socket.emit(`connected`);

  socket.on("getDucks", async () => {
    try {
      const list: any = await getDucksList();
      socket.emit("DucksDB", list.rows);
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("addDuck", (socket) => {
    try {
      console.log(socket);
      //   const list = getDucksList();
      //   console.log(list);
      socket.emit("addDuck", { socket });
    } catch (err) {
      console.log(err);
    }
  });
});

httpServer.listen(4000, function () {
  console.log("Socket listening on 4000");
});
