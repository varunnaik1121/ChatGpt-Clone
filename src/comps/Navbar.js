import React from 'react';

const Navbar = ({ title }) => {
  return (
    <div className="w-full border-1 flex justify-center items-center bg-[#343541] px-2 py-4 border-b-[1px] border-[#D9D9E2]">
      <h3 className="capitalize">{title}</h3>
    </div>
  );
};

export default Navbar;
