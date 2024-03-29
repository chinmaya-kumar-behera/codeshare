import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

const CodeShareModal = ({isOpen, onClose}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <Dialog
        className="relative"
        contentClassName="w-full max-w-2xl h-auto bg-white px-5 py-10 lg:px-10 rounded"
        overlayClassName="backdrop-blur oveflow-y-scroll"
        isOpen={isOpen}
        closable={true}
        onClose={onClose}
        onRequestClose={onClose}
      >
    <div className="modal__content">
      <div className="modal__header">
        <button className="btn btn-icon modal__close">
          <IoCopyOutline />
        </button>
        <h4 className="modal__title">Share Code</h4>
      </div>
      <div className="modal__body">
        <div className="share-modal">
          <p>Anyone with access to this URL will see your code in real time.</p>
          <div className="form-field">
            <label htmlFor="url">Share this URL</label>
            <input type="text" name="url" id="url" readOnly value="https://codeshare.io/J778KZ" />
            <button className="btn btn-icon" onClick={handleCopy}>
              <IoCopyOutline />
            </button>
            <span className="copy-success" style={{ opacity: copied ? 1 : 0 }}>
              Copied!
            </span>
          </div>
          <div>
            <div className="form-field">
              <label htmlFor="view-only">"View only" mode</label>
              <label className="switch hint--top" data-hint="Sorry, only registered users can manage permissions.">
                <input type="checkbox" className="switch-input" />
                <span className="switch-label" data-on="On" data-off="Off"></span>
                <span className="switch-handle"></span>
              </label>
              <p className="note">Turn on "view only" mode if you don't want others to edit the code</p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal__footer">
        <button className="btn btn-primary">Close</button>
      </div>
    </div>
      </Dialog>

  );
};

export default CodeShareModal;
