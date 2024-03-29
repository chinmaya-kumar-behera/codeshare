const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require('cors')

const { connectToDatabase } = require("./src/config/dbConfig");
const Router = require("./src/router/router");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
connectToDatabase();
app.use(cors({ origin: [process.env.WEB_BASE_URL] }));
app.use("/", Router);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.WEB_BASE_URL,
  },
});
io.origins("*:*");

io.on("connection", (socket) => {
  console.log(`A user connected : ${socket.id}`);

  socket.on("joinRoom", (roomName) => {
    console.log("joinRoom event");
    socket.join(roomName);
    io.to(roomName).emit("roomJoined", `You joined room : ${roomName}`);
  });
  
  socket.on('codeShare', (roomName, data) => {
    console.log("codeShare event")
    socket.broadcast.to(roomName).emit("newCode", data);
  })

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
