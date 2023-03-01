import React, { useEffect } from 'react';
import userAvatar from '../assets/userAvatar.jpeg';
import chatgpt from '../assets/chatgpt.png';
import TypedText from './TypedMessage';
const MessageBox = ({ message, index, length, contRef, loading }) => {
  return (
    <div className="w-full px-4 py-2  ">
      {/* bots container */}
      <div className="w-full px-2 py-4">
        <div className="flex px-2 pb-6 items-center">
          <img src={userAvatar} className="w-[30px] h-[30px] rounded-sm" />
          <p className="px-4">{message.userMessage}</p>
        </div>
      </div>

      <div className="w-full bg-[#444654] px-4 py-3  flex place-items-start ">
        <img src={chatgpt} className="w-[30px] h-[30px] rounded-sm " />
        {message.loading === true ? (
          'loading'
        ) : (
          <div className="flex px-2  items-center pb-4 ">
            {
              <TypedText
                text={message.botMessage}
                index={index}
                messagesLength={length}
                contRef={contRef}
              />
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
