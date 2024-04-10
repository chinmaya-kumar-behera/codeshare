import React, { useState } from "react";
import CodeShareModal from "./CodeShareModal";
import UpcommingFeature from "./UpcommingFeature";
import { useSelector } from "react-redux";
import Profile from "../../../views/header/Profile";
import { FaUsers } from "react-icons/fa";

const CodeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feature, setFeature] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const onFeatureComming = () => {
    setFeature(true)
  }

  return (
    <header className="w-full bg-[#31353f] h-[60px] flex items-center justify-between px-5">
      <div className="max-w-[140px]">
        <img
          src="https://codeshare.io/-/img/codeshare-logo.svg?v=v3.32.2"
          alt="logo"
        />
      </div>
      <div className="flex items-center gap-5">
        {!user?._id && <span>Expired in 24 hours</span>}
        {!user?._id && (
          <a href="/login">
            <button
              className="hidden md:block px-3 py-2 bg-[#ec3360] text-center hover:bg-[#eb1d4e] rounded text-white"
              onClick={onFeatureComming}
            >
              Save codeshare
            </button>
          </a>
        )}

        <button
          className="px-4 py-2 flex items-center gap-3 bg-gray-800 text-center rounded hover:text-[#eb1d4e] hover:bg-white text-white border border-white transition-all bg-opacity-50 text-md"
          onClick={openDialog}
        >
          <FaUsers className="text-xl"/>
          Share
        </button>
        <Profile />
      </div>
      <CodeShareModal isOpen={isOpen} onClose={closeDialog} />

      <UpcommingFeature isOpen={feature} onClose={() => setFeature(false)} />
    </header>
  );
};

export default CodeHeader;
