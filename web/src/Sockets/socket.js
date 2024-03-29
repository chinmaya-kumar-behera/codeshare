import { io } from "socket.io-client";

let cachedSocket = null;

export default function initializeSocket(userData) {
  if (cachedSocket) {
    return cachedSocket;
  }
  console.log(process.env.REACT_APP_SOCKET_URL);

  let query = {};
  if (userData?._id) {
    query.userId = userData._id;
  }
  if (userData?.name) {
    query.userName = userData.name;
  }
  const socket = io(process.env.REACT_APP_SOCKET_URL, {
    query,
    closeOnBeforeunload: false,
  });

  cachedSocket = socket;
  return socket;
}


export const removeCachedSocket = () => {
  cachedSocket = null;
}