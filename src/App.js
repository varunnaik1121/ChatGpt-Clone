import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './comps/Navbar';
import MessageBox from './comps/MessageBox';
import Footer from './comps/Footer';
function App() {
  const containerRef = useRef(null);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    {
      userMessage:
        'hello how are you nfjjdg gfhdfjgk hfdhgk fdhk d h d hlfh dhfhhd fhfhdkgd ghfd gdfg gfgudg odfi',
      botMessage: `import { useState, useEffect } from 'react';
          function TypingEffect({ text }) {
        const [typedText, setTypedText] = useState('');
        const [index, setIndex] = useState(0);
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setTypedText(text.substring(0, index));
            setIndex(index => index + 1);
          }, 100);
      
          return () => clearInterval(intervalId);
        }, [text, index]);
      
        return <span>{typedText}</span>;
      }`,
    },
    {
      userMessage:
        'hello how are you nfjjdg gfhdfjgk hfdhgk fdhk d h d hlfh dhfhhd fhfhdkgd ghfd gdfg gfgudg odfi',
      botMessage: `import { useState, useEffect } from 'react';
          function TypingEffect({ text }) {
        const [typedText, setTypedText] = useState('');
        const [index, setIndex] = useState(0);
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setTypedText(text.substring(0, index));
            setIndex(index => index + 1);
          }, 100);
      
          return () => clearInterval(intervalId);
        }, [text, index]);
      
        return <span>{typedText}</span>;
      }`,
    },
  ]);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = () => {
    console.log(userInput);
  };

  return (
    <div className="w-[100vw] bg-[#343541] overflow-x-hidden text-[#D9D9E2] h-[100vh] flex justify-center">
      <div
        className="w-full md:w-[60%] bg-transparent 
      "
      >
        <div className="w-full h-full mb-8 flex flex-col justify-between scroll-smooth ">
          <div
            className="pb-4  overflow-y-scroll scroll-smooth"
            ref={containerRef}
          >
            <Navbar title={'Model summarizes conversation'} />
            {messages.map((message, index) => {
              return (
                <MessageBox
                  message={message}
                  index={index}
                  length={messages.length}
                  key={index}
                  contRef={containerRef}
                />
              );
            })}
          </div>
          <Footer
            setUserInput={setUserInput}
            userInput={userInput}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
