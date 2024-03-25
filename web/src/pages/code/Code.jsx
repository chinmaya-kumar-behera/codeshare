import CodeHeader from "./components/CodeHeader";
import CodeEditor from "./components/CodeEditor";
import SettingBar from "./components/SettingBar";
function Code() {
  return (
    <div className="">
      <CodeHeader />
      <div className="max-h-[calc(100vh-50px)] w-full">
        <div className="w-full h-full relative">
          <SettingBar />
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}
export default Code;
