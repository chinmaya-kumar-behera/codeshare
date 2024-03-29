import React, { useState, useEffect, useRef } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaDownload, FaPlus } from "react-icons/fa6";
import Settings from "./Settings";
import NavigationHandler from "../../../handlers/NavigationHandler";

const SettingBar = ({ setEditConfig, editorConfig, code }) => {
  const { navigateToNewUrl, generateRandomString } = NavigationHandler();
  const [aside, setAside] = useState(false);
  const asideRef = useRef(null);

  const toggleAside = () => {
    setAside((prevAside) => !prevAside);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setAside(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


  const downloadCodeHandler = () => {
    const codeContent = code;

    const blob = new Blob([codeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "code.txt";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const newPageHandler = () => {
    window.open(
      process.env.REACT_APP_BASE_WEB_URL + "/" + generateRandomString(),
      "_blank"
    );
    navigateToNewUrl();
  }



  return (
    <div className="absolute top-[1px] right-0 lg:right-2 h-full z-10 text-gray-300">
      <div className="relative w-full h-full">
        <aside
          ref={asideRef}
          className={`fixed top-[1px] w-[350px] right-0 h-full transition-all border border-gray-600 shadow-md rounded  ${
            aside ? "translate-x-0" : "translate-x-[350px]"
          } bg-[#31353f]`}
        >
          <Settings
            toggle={toggleAside}
            setEditConfig={setEditConfig}
            editorConfig={editorConfig}
          />
        </aside>
        <div className="h-full flex flex-col gap-[1px] items-center">
          <div
            className="p-4 bg-[#31353f] group cursor-pointer"
            onClick={toggleAside}
          >
            <IoSettingsSharp className="text-xl group-hover:text-white transition-all" />
          </div>
          <div className="p-4 bg-[#31353f] group" onClick={downloadCodeHandler}>
            <FaDownload className="text-xl group-hover:text-white transition-all" />
          </div>

          <div className="p-4 bg-[#31353f] group" onClick={newPageHandler}>
            <FaPlus
              className="text-xl group-hover:text-white transition-all"
              // onClick={navigateToNewUrl}
            />
          </div>
          <div className="bg-[#31353f] w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SettingBar;
