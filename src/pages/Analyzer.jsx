import { useState } from "react";
import { TbAnalyze } from "react-icons/tb";
import Markdown from "react-markdown";
import { optimizedRequest, placeholder, url } from "../utils/gemini";

export default function Analyzer() {
  const [messages, setMessages] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle user input change
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Analyze and fetch the AI response
  const handleAnalyze = async function (e) {
    e.preventDefault();
    const requestBody = optimizedRequest(userInput);

    try {
      setIsLoading(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      console.log(data.candidates[0].content.parts[0].text);
      setMessages(data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className={`h-full flex flex-col items-center ${
        messages ? "justify-start" : "justify-center"
      }`}
    >
      {!messages && (
        <form
          className="relative flex flex-col justify-center items-center gap-5 w-full"
          onSubmit={handleAnalyze}
        >
          <h3 className="font-medium text-32 mb-5 text-center">
            Analyze Post Content
          </h3>

          <textarea
            required
            type="text"
            placeholder={placeholder}
            value={userInput}
            onChange={handleChange}
            className="h-96 w-3/4 mx-auto text-18 p-3 border-2 border-lemon-dark rounded-xl resize-none outline-none"
          />
          <button
            className="bg-lemon-dark text-black text-18 font-medium rounded-md flex items-center justify-center gap-4 px-16 py-4"
            disabled={isLoading}
          >
            <TbAnalyze />
            <span>{isLoading ? "Analyzing..." : "Analyze"}</span>
          </button>
        </form>
      )}
      <div className="generated-content self-start">
        {messages && <Markdown>{messages}</Markdown>}
      </div>
    </section>
  );
}
