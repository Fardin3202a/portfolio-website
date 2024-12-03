import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isOpen, message, isSuccess, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white/60 backdrop-blur-xl rounded-xl w-1/3 p-6 flex flex-col items-center gap-5">
        <FontAwesomeIcon
          icon={isSuccess ? faCheckCircle : faTimesCircle}
          className={`text-6xl ${isSuccess ? "text-green-500" : "text-red-500"}`}
        />
        <h2 className="mt-4 text-xl font-poppins">{message}</h2>
        <button
          onClick={onClose}
          className="mt-4 rounded-full bg-gray-800 text-white w-32 h-12 text-xl font-pacifico"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
