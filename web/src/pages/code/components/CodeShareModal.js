import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Dialog from "../../../components/UI/Dialog";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const CodeShareModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const iconStyle = `p-3 bg-gray-100 bg-opacity-10 text-white rounded-full cursor-pointer hover:text-[#ec3360] transition-all duration-300`;


  return (
    <Dialog
      className="relative"
      contentClassName="w-full max-w-lg md:max-w-2xl h-auto bg-[#38343c] px-5 py-10 lg:px-10 rounded"
      overlayClassName="backdrop-blur oveflow-y-scroll"
      isOpen={isOpen}
      closable={true}
      onClose={onClose}
      onRequestClose={onClose}
    >
      <div className="space-y-5 text-gray-300 text-center lg:text-left">
        <div className="">
          <h4 className="text-3xl ">Share Code</h4>
        </div>
        <div className="">
          <p className="text-lg text-gray-100">
            Anyone with access to this URL will see your code in real time.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <label className="">Share this URL</label>
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <input
              type="text"
              name="url"
              id="url"
              readOnly
              value="https://codeshare.io/J778KZ"
              className="w-full lg:w-2/3 p-3 rounded border border-gray-400 text-lg text-black"
            />
            <button className="btn btn-icon" onClick={handleCopy}>
              <IoCopyOutline className="text-2xl text-[#ec3360]" />
            </button>
            <span
              className="text-[#ec3360]"
              style={{ opacity: copied ? 1 : 0 }}
            >
              Copied!
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label className="">Share Via</label>
          <div className="flex gap-2 items-center justify-center lg:justify-start">
            <button className={iconStyle}>
              <FaLinkedinIn />
            </button>
            <button className={iconStyle}>
              <FaGithub />
            </button>
            <button className={iconStyle}>
              <FaInstagram />
            </button>
            <button className={iconStyle}>
              <FaFacebookF />
            </button>

            <a
              href="https://api.whatsapp.com/send?text=Check%20out%20this%20codeshare:%20https://codeshare.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={iconStyle}>
                <FaTwitter />
              </button>
            </a>
          </div>
        </div>

        {/* <div>
          <div className="flex flex-col gap-4">
            <label className="">"View only" mode</label>
            <label
              className="switch hint--top"
              data-hint="Sorry, only registered users can manage permissions."
            >
              <input type="checkbox" className="switch-input" />
              <span className="switch-label" data-on="On" data-off="Off"></span>
              <span className="switch-handle"></span>
            </label>
          </div>
          <p className="text-gray-400 mt-3">
            Turn on "view only" mode if you don't want others to edit the code
          </p>
        </div> */}

        <div className="mt-5">
          <button className="px-4 py-2 bg-[#ec3360] rounded" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default CodeShareModal;
