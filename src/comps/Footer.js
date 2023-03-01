import React from 'react';
import { FiSend } from 'react-icons/fi';
const Footer = ({ setUserInput, userInput, handleSubmit }) => {
  return (
    <>
      <div className="w-full  px-4 py-2 mb-8  flex items-center mt-6 bg-[#444654]">
        <textarea
          className="w-full  border-none overflow-hidden outline-none h-full bg-transparent px-3 py-1  text-sm "
          rows={1}
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button
          onClick={() => handleSubmit()}
          className="px-2  py-2 bg-[#343541] mx-2"
        >
          <FiSend className="mx-2 cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default Footer;
