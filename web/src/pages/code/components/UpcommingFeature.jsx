import React from "react";
import Dialog from "../../../components/UI/Dialog";

const UpcomingFeature = ({ isOpen, onClose }) => {
  return (
    <Dialog
      className="relative"
      contentClassName="w-full max-w-lg md:max-w-2xl h-auto bg-[#38343c] text-white px-5 py-10 lg:px-10 rounded"
      overlayClassName=""
      isOpen={isOpen}
      closable={true}
      onClose={onClose}
      onRequestClose={onClose}
    >
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-100">Upcoming Feature</h3>
        <p className="text-sm leading-relaxed text-gray-400">
          This feature is currently in development. Thank you for your patience!
        </p>
      </div>
    </Dialog>
  );
};

export default UpcomingFeature;
