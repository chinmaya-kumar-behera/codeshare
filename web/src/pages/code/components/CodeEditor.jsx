// import Editor from "@monaco-editor/react";
// import React from "react";

// const CodeEditor = () => {
//   const code = "var message = 'Monaco Editor!'\nconsole.log(message);";

//   const onChangeHandler = (newValue) => {
//     console.log(newValue);
//   };

//   return (
//     <div className="w-full">
//       <div className="editor-container">
//         <Editor
//           height="92vh"
//           language="javascript"
//           theme="vs-dark"
//           value={code}
//           onChange={onChangeHandler}
//           options={{
//             inlineSuggest: true,
//             fontSize: "16px",
//             formatOnType: true,
//             autoClosingBrackets: true,
//             minimap: { scale: 10 },
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;

import Editor from "@monaco-editor/react";
import React from "react";
import SettingBar from "./SettingBar";

const CodeEditor = () => {
  const code = "var message = 'Monaco Editor!'\nconsole.log(message);";

  const onChangeHandler = (newValue) => {
    console.log(newValue);
  };

  return (
    <div className="editor-container">
      <Editor
        className="no-scrollbar"
        height="93vh"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={onChangeHandler}
        options={{
          inlineSuggest: true,
          fontSize: "16px",
          formatOnType: true,
          autoClosingBrackets: true,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default CodeEditor;
