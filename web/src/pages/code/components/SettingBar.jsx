import React, { useState, useEffect, useRef } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaDownload, FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const SettingBar = () => {
  const [aside, setAside] = useState(true); // Start with aside closed
  const asideRef = useRef(null);

  const toggleAside = () => {
    setAside((prevAside) => !prevAside); // Toggle the aside state
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
          <div className="p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Settings</h2>
              <button onClick={toggleAside}>
                <RxCross1 />
              </button>
            </div>
            <div className="mt-5 space-y-5">
              <div className="">
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Select Language
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#eb1d4e] focus:border-[#eb1d4e] block w-full p-2.5  ">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="">
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Select Font Size
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#eb1d4e] focus:border-[#eb1d4e] block w-full p-2.5  ">
                  <option value="US">16px</option>
                  <option value="CA">18px</option>
                  <option value="FR">19px</option>
                  <option value="DE">20px</option>
                </select>
              </div>
            </div>
          </div>
        </aside>
        <div className="h-full flex flex-col gap-[1px] items-center">
          <div
            className="p-4 bg-[#31353f] group cursor-pointer"
            onClick={toggleAside} // Toggle aside when settings icon is clicked
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
