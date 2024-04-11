import CodeHeader from "./components/CodeHeader";
import CodeEditor from "./components/CodeEditor";
import SettingBar from "./components/SettingBar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import initializeSocket from "../../Sockets/socket";
import { useSelector } from "react-redux";
import CodeHandler from "../../handlers/CodeHandler";

function Code() {
  const param = useParams();
  const { id } = param;
  const { getCodeHandler, updateEditor } = CodeHandler();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    getCodeHandler({ id, userId: user?._id });
  },[id, user?._id])

  // document.writeText("Hello users");

  const authData = {}

  useEffect(() => {
    const socket = initializeSocket(authData.user);

    socket.emit("joinRoom", id);

    socket.on('roomJoined', (msg) => {
      console.log("roomJoined",msg)
    })

    socket.on("newCode", (data) => {
      console.log("newCode", data);
      updateEditor(data);
    });

    return () => {
      socket.off("roomJoined");
      socket.off("newCode");
    }
  }, [id]);

  return (
    <div className="">
      <CodeHeader />
      <div className="max-h-[calc(100vh-50px)] w-full">
        <div className="w-full h-full relative">
          <SettingBar id={id} />
          <CodeEditor
            id={id}
          />
        </div>
      </div>
    </div>
  );
}
export default Code;
