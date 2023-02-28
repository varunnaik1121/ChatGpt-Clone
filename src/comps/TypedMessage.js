import React, { useEffect, useRef, useState } from 'react';

const TypedMessage = ({ text, index, messagesLength, contRef }) => {
  const [typedText, setTypedText] = useState('');
  const [idx, setIdx] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypedText(text.substring(0, idx));
      setIdx((idx) => idx + 1);
    }, 20);

    if (idx > text.length) {
      contRef.current.scrollTop = contRef.current.scrollHeight;
      clearInterval(intervalId);
      return;
    }

    return () => clearInterval(intervalId);
  }, [text, idx]);

  return (
    <div className="py-2 " ref={index === messagesLength - 1 ? divRef : null}>
      {index === messagesLength - 1 ? (
        <div>
          <div className=" w-[100%] max-w-[1280px]  whitespace-pre-wrap flex-1 flex ">
            <div className="relative pl-4 pr-2 max-w-[100%] ">
              {typedText.split().map((word) => {
                return <span className="leading-7">{word}</span>;
              })}
              {idx < text.length && (
                <span className="absolute translate-y-[50%] w-[6px] h-[15px] bg-white animate-pulse duration-550 mx-1"></span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="px-4 w-[100%] max-w-[1280px]  whitespace-pre-wrap flex-1 flex">
          {text}
        </p>
      )}
    </div>
  );
};

export default TypedMessage;
