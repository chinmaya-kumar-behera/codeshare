import Editor from "@monaco-editor/react";
import React, { useEffect, useState } from "react";
import URLHandler from "../../../handlers/URLHandler";

const CodeEditor = ({ editorConfig, code, setCode, id }) => {
  const { createCodeHandler } = URLHandler();

  const onChange = (value) => {
    setCode(value);
    delayedCodeHandler();
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const delayedCodeHandler = debounce(() => {
    createCodeHandler({ id, code, setting: editorConfig });
  }, 3000);

  useEffect(() => {
    return delayedCodeHandler.cancel; // Cleanup the debounce timer
  }, []); // Runs only once on component mount

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
