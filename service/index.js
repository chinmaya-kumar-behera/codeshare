const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require('cors')
const { connectToDatabase } = require("./src/config/dbConfig");
const Router = require("./src/router/router");

const app = express();
connectToDatabase();
app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/", Router);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.emit("welcome", { message: "Hello. THis is welcome message" });

  socket.on("message", (message) => {
    console.log("Message from client:", message);
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
