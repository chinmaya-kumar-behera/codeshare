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

console.log();

connectToDatabase();
app.use(cors({ origin: [process.env.WEB_BASE_URL] }));

app.use("/", Router);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.WEB_BASE_URL,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // socket.on('initialEmit', (msg) => {
  //   console.log(msg)
  // })

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
