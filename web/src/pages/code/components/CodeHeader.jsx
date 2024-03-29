import React, { useState } from "react";
import Dialog from "../../../components/UI/Dialog";
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";


const CodeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-[#31353f] h-[60px] flex items-center justify-between px-5">
      <div className="max-w-[140px]">
        <img
          src="https://codeshare.io/-/img/codeshare-logo.svg?v=v3.32.2"
          alt="logo"
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="px-3 py-2 bg-[#ec3360] text-center hover:bg-[#eb1d4e] rounded text-white">
          Save codeshare
        </button>

        <button
          className="px-4 py-2 bg-gray-800 text-center rounded hover:text-[#eb1d4e] hover:bg-white text-white border border-white transition-all bg-opacity-50 text-sm"
          onClick={openDialog}
        >
          Share
        </button>
        <button className="px-4 py-2 bg-gray-800 text-center rounded hover:text-[#eb1d4e] hover:bg-white text-white border border-white transition-all bg-opacity-50 text-sm">
          Log In
        </button>
      </div>
<CodeShareModal isOpen={isOpen} onClose={closeDialog}/>
     
    </header>
  );
};

export default CodeHeader;