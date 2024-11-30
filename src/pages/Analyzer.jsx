import { useState, useRef, useEffect } from "react";

export default function Analyzer() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messageContainerRef = useRef(null); // For scrolling to the bottom

  // Handle user input change
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Analyze and fetch the AI response
  const handleAnalyze = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const requestBody = {
      contents: [{ parts: [{ text: userInput }] }],
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data && data.candidates?.[0]?.content?.parts?.[0]?.text) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        const processedResponse = processText(aiResponse);

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'user', text: userInput },
          { sender: 'ai', text: processedResponse },
        ]);
        setUserInput('');
      } else {
        console.log('No text found in the response.');
      }
    } catch (error) {
      console.error('Error during API request:', error);
    }

    setIsLoading(false);
  };

  // Function to process and format AI response text
  const processText = (text) => {

    let formattedText = text.replace(/\*(.*?)\*/g, (match, p1) => `<strong>${p1}</strong>`);

    formattedText = formattedText.replace(/\n/g, '<br />');

    formattedText = formattedText.replace(/(^|\n)([A-Z][A-Z\s]+)(?=\n|$)/g, (match, p1, p2) => {
      return `${p1}<strong>${p2}</strong>`;
    });

    return formattedText;
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAnalyze();
    }
  };

  return (
    <div className="h-full w-full">
      <div className="w-full h-full border-2 border-blue-300 flex flex-col gap-10 mx-auto p-5">
        <h3 className="font-semibold text-32 mb-5 text-center">Chat with syntheos</h3>
        <div
          ref={messageContainerRef}
          className="flex flex-col h-[80%] bg-lemon-dark border-2 border-green-300 p-5 mx-auto w-4/5 rounded-lg text-16 overflow-y-auto scrollable"
        >
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'ai' ? 'justify-start' : 'justify-end'} mb-2`}>
              <div
                className={`message ${message.sender === 'ai' ? 'bg-white text-black p-3 rounded-lg' : 'bg-lemon-default p-3 rounded-lg'
                  }`}
              >
                <p dangerouslySetInnerHTML={{ __html: message.text }} />
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="loading mt-4 text-white">
              <p>AI is thinking...</p>
            </div>
          )}
        </div>

        <div className="relative bottom-0 flex flex-col justify-center items-center gap-5">
          <textarea
            type="text"
            placeholder="Enter content"
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="h-40 w-3/4 mx-auto text-[18px] p-3 border-2 border-lemon-dark rounded-xl resize-none"
          />
          <button
            className="bg-lemon-dark text-black text-16 font-medium rounded-md h-20 w-60 px-0 py-0"
            onClick={handleAnalyze}
            disabled={isLoading}
          >
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
}
