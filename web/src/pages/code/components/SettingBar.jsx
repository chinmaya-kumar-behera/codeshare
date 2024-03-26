import React, { useState, useEffect, useRef } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaDownload, FaPlus } from "react-icons/fa6";
import Settings from "./Settings";

const SettingBar = ({ setEditConfig, editorConfig }) => {
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

  return (
    <div className="absolute top-[1px] right-2 h-full z-10 text-gray-400">
      <div className="relative w-full h-full">
        <aside
          ref={asideRef}
          className={`absolute top-[1px] h-full right-0 transition-all ${
            aside ? "w-[300px]" : "w-0"
          } bg-white`}
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
          <div className="p-4 bg-[#31353f] group">
            <FaDownload className="text-xl group-hover:text-white transition-all" />
          </div>

          <div className="p-4 bg-[#31353f] group">
            <FaPlus className="text-xl group-hover:text-white transition-all" />
          </div>
          <div className="bg-[#31353f] w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SettingBar;
