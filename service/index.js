// const express = require("express");

// const http = require("http");
// const { Server } = require("socket.io");

// const cors = require('cors')

// const { connectToDatabase } = require("./src/config/dbConfig");
// const Router = require("./src/router/router");
// const dotenv = require("dotenv");

// dotenv.config();
// const app = express();
// app.use(express.json());
// connectToDatabase();
// app.use(cors({ origin: [process.env.WEB_BASE_URL] }));
// app.use("/", Router);

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: process.env.WEB_BASE_URL,
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`A user connected : ${socket.id}`);

//   socket.on("joinRoom", (roomName) => {
//     console.log("joinRoom event");
//     socket.join(roomName);
//     io.to(roomName).emit("roomJoined", `You joined room : ${roomName}`);
//   });
  
//   socket.on('codeShare', (roomName, data) => {
//     console.log("codeShare event")
//     socket.broadcast.to(roomName).emit("newCode", data);
//   })

//   socket.on("disconnect", () => {
//     console.log("A user disconnected");
//   });
// });

// const PORT = process.env.PORT;

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const initSocket = require("./src/socket/socket");
const { connectToDatabase } = require("./src/config/dbConfig");
const AppRouter = require("./src/router/router");

const app = express();
const server = require("http").Server(app);


dotenv.config();
connectToDatabase();
app.use(cors({ origin: [process.env.WEB_BASE_URL] }));
app.use(express.json());

// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.BASE_URL,
//   })
// );

app.use(express.json());


initSocket(server);

app.use("/", AppRouter);  


app.use((req, res, next) => {
  const error = new Error("Path not found.");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});