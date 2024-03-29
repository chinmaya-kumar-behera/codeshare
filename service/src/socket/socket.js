const socketIO = require("socket.io");

let io;

const initSocket = (server) => {
  io = socketIO(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    const userName = socket.handshake.query.userName;
    console.log(`${userName ?? "Unknown user"} connected!`);

    socket.on("joinRoom", (roomName) => {
      console.log("joinRoom event");
      socket.join(roomName);
      io.to(roomName).emit("roomJoined", `You joined room : ${roomName}`);
    });

    socket.on("codeShare", (roomName, data) => {
      console.log("codeShare event");
      socket.broadcast.to(roomName).emit("newCode", data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

module.exports = initSocket;
