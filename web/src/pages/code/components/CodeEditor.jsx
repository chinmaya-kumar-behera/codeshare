import Editor from "@monaco-editor/react";
import React, { useEffect, useState } from "react";
import URLHandler from "../../../handlers/URLHandler";
import useDebounce from "../../../hooks/useDebounce";

const CodeEditor = ({ editorConfig, code, setCode, id }) => {
  const { createCodeHandler } = URLHandler();

  const onChange = (value) => {
    setCode(value);
    uploadCode();
  };

  const uploadCode = useDebounce(() => {
    createCodeHandler({ id, code, setting: editorConfig }).then((res) =>
      console.log(res.data)
    );
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
