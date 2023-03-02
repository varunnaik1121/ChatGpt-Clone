import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
const Loading = () => {
  return (
    <div className=" h-full flex justify-center items-center mx-2">
      <ThreeDots
        height="25"
        width="25"
        radius="9"
        color="#D9D9E2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
