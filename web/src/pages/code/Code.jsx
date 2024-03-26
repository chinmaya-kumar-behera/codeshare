import CodeHeader from "./components/CodeHeader";
import CodeEditor from "./components/CodeEditor";
import SettingBar from "./components/SettingBar";
import { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import { useParams } from "react-router-dom";
import URLHandler from "../../handlers/URLHandler";

function Code() {
  const socket = socketIo.connect("http://localhost:5000");
  const param = useParams();
  const { id } = param;
  const { getCodeHandler } = URLHandler();

  const [code, setCode] = useState( "var message = 'Monaco Editor!'\nconsole.log(message);");
  const [editorConfig, setEditConfig] = useState({
    language: "javascript",
    fontSize: 16,
  });

  useEffect(() => {
    socket.emit('welcome')
  }, [socket]);


  useEffect(() => {
    getCodeHandler(id)
      .then((res) => {console.log(res)})
      .catch((err) => console.log(err));
  },[])

  return (
    <div className="">
      <CodeHeader />
      <div className="max-h-[calc(100vh-50px)] w-full">
        <div className="w-full h-full relative">
          <SettingBar
            setEditConfig={setEditConfig}
            editorConfig={editorConfig}
          />
          <CodeEditor editorConfig={editorConfig} code={code} setCode={setCode} id={id} />
        </div>
      </div>
    </div>
  );
}
export default Code;
