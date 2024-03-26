import CodeHeader from "./components/CodeHeader";
import CodeEditor from "./components/CodeEditor";
import SettingBar from "./components/SettingBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import URLHandler from "../../handlers/URLHandler";
import { socket } from "../../config/socket";

function Code() {
  const param = useParams();
  const { id } = param;
  const { getCodeHandler } = URLHandler();
  console.log(id)

  const defaultValue = {
    code: "var message = 'Monaco Editor!'\nconsole.log(message);",
    language: "javascript",
    fontSize: 16,
  };

  const [code, setCode] = useState(defaultValue.code);
  const [editorConfig, setEditConfig] = useState({
    language: defaultValue.language,
    fontSize: defaultValue.fontSize,
  });

  const editorDefaultValue = () => {
    setEditConfig({
      language: defaultValue.language,
      fontSize: defaultValue.fontSize,
    });
    setCode(defaultValue.code);
  }

  useEffect(() => {
    console.log("useEffeect caled")
    getCodeHandler(id)
      .then((data) => updateEditorValue(data.data.data))
      .catch((err) => console.log(err));
  },[id])

  function updateEditorValue(data) {
    if (data) {
      const { code, setting } = data;
      setCode(code);
      setEditConfig({ ...setting });
    } else {
      editorDefaultValue()
    }
  }

  useEffect(() => {
    socket.emit("joinRoom", id);

    socket.on('roomJoined', (msg) => {
      console.log(msg)
    })

    socket.on("newCode", (data) => {
      updateEditorValue(data)
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
