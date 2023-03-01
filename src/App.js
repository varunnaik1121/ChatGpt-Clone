import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './comps/Navbar';
import MessageBox from './comps/MessageBox';
import Footer from './comps/Footer';
import axios from 'axios';
function App() {
  const containerRef = useRef(null);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    containerRef.current.scrollWidth = 0;
  }, []);

  const handleSubmit = async () => {
    setMessages([
      ...messages,
      { userMessage: userInput, botMessage: null, loading: true },
    ]);

    try {
      setLoading(true);
      const data = await axios.post('http://localhost:5000/', { userInput });
      const botResponse = data?.data?.bot.toString().trim() || '';
      let copiedArr = [...messages];
      console.log({ copiedArr });
      let lastObject = copiedArr[copiedArr.length - 1];

      let updatedObject = {
        ...lastObject,
        userMessage: userInput,
        botMessage: botResponse,
        loading: false,
      };
      copiedArr[copiedArr.length] = updatedObject;
      console.log(copiedArr);
      setLoading(false);
      setMessages(copiedArr);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };

  return (
    <div className="w-[100vw] bg-[#343541] overflow-x-hidden text-[#D9D9E2] h-[100vh] flex justify-center">
      <div
        className="w-full xl:w-[60%] bg-transparent 
      "
      >
        <div className="w-full h-full mb-8 flex flex-col justify-between scroll-smooth">
          <div
            className="pb-4  overflow-y-scroll scroll-smooth "
            ref={containerRef}
            id="scrollbar"
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
                  loading={loading}
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
