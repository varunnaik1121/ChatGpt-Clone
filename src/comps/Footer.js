import React from 'react';
import { FiSend } from 'react-icons/fi';
const Footer = ({ setUserInput, userInput, handleSubmit }) => {
  return (
    <div className="w-full  px-4 py-1 mb-8  flex items-center mt-4 bg-[#444654]">
      <textarea
        className="w-full  border-none outline-none h-full bg-transparent px-3 py-1  text-sm "
        rows={1}
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button onClick={() => handleSubmit()}>
        <FiSend className="mx-2 cursor-pointer" />
      </button>
    </div>
  );
};

export default Footer;
