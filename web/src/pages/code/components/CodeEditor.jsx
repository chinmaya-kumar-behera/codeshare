import Editor from "@monaco-editor/react";
import React from "react";
import URLHandler from "../../../handlers/URLHandler";
import useDebounce from "../../../hooks/useDebounce";
import { socket } from "../../../config/socket";

const CodeEditor = ({ editorConfig, code, setCode, id }) => {
  const { createCodeHandler } = URLHandler();

  const onChange = (value) => {
    setCode(value);
    uploadCode();
  };

  const uploadCode = useDebounce(() => {
    createCodeHandler({ id, code, setting: editorConfig }).then((res) => {});
    socket.emit("codeShare", id, { setting: editorConfig, code });
  }, 2000);

  return (
    <div className="editor-container">
      <Editor
        className="no-scrollbar"
        height="93vh"
        language={editorConfig.language}
        theme="vs-dark"
        value={code}
        onChange={onChange}
        options={{
          inlineSuggest: true,
          fontSize: editorConfig.fontSize + "px",
          formatOnType: true,
          autoClosingBrackets: true,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default CodeEditor;