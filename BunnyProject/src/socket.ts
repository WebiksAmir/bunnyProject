import { io, Socket } from "socket.io-client";
export const socket: Socket = io("http://localhost:4000");

socket.on(`connected`, () => {
  console.log("connected to socket");
});
