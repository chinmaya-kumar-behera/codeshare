import Editor from "@monaco-editor/react";
import React from "react";
import useDebounce from "../../../hooks/useDebounce";
import { socket } from "../../../config/socket";
import { useSelector, useDispatch } from "react-redux";
import CodeHandler from "../../../handlers/CodeHandler";
import { setCode } from "../../../redux/code/editorSlice";
import { FaEye } from "react-icons/fa";

const CodeEditor = ({ id, viewMode }) => {
  const { createCodeHandler } = CodeHandler();

  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.user);
  const code = useSelector((state) => state.editor.code);
  const codeData = useSelector((state) => state.editor.codeData);
  const editor = useSelector((state) => state.editor.editor);
  const viewOnly = useSelector((state) => state.editor.viewOnly);

  const onChange = (value) => {
    dispatch(setCode(value));
    uploadCode(value, id, editor, viewOnly);
  };

  const uploadCode = useDebounce((code, id, setting, viewOnly) => {
    createCodeHandler({ id, code, setting, viewOnly }).then((res) => { 
      socket.emit("codeShare", id, { setting, code, viewOnly, ...codeData });
    }).catch(err=>console.log(err))
  }, 2000);

  const checkEditorDisabled = () => {
    
    if (viewOnly) {
      if (codeData.user == authData?._id) {
         return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  return (
    <div className="editor-container relative">
      <Editor
        placeholder="hello hii bye"
        className="no-scrollbar"
        height="93vh"
        readonly={true}
        language={editor.language}
        theme="vs-dark"
        value={code}
        onChange={onChange}
        options={{
          readOnly: checkEditorDisabled(),
          inlineSuggest: true,
          fontSize: editor.fontSize + "px",
          formatOnType: true,
          autoClosingBrackets: true,
          minimap: { enabled: false },
        }}
      />
      {checkEditorDisabled() && (
        <div className="absolute left-3 bottom-2 ">
          <span className="text-gray-200 text-xs flex gap-1 items-center">
            <FaEye className="text-xl" />
            You are in <strong>View only</strong> Mode
          </span>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;






