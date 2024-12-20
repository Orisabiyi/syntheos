import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import { TbAnalyze } from "react-icons/tb";
import { handleSaveHistory } from "../firebase/firestore";
import { optimizedRequest, placeholder, url } from "../utils/gemini";
import chillguy from "../assets/chillguy.jpg";

export default function Analyzer() {
  const [messages, setMessages] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [error]);

  // Handle user input change
  const handleChange = function (e) {
    setUserInput(e.target.value);
  };

  const handleSave = async function () {
    try {
      setError("");
      setIsLoading(true);

      const history = {
        userID: sessionStorage.getItem("userID"),
        content: userInput,
        messages,
        date: new Date().toISOString(),
      };

      const data = await handleSaveHistory(history);
      console.log(data);

      if (!data) throw new Error("There is an error finding data");
      setIsSave(true);
    } catch (error) {
      setError(`Error during request: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Analyze and fetch the AI response
  const handleAnalyze = async function (e) {
    e.preventDefault();
    const requestBody = optimizedRequest(userInput);

    if (userInput.length < 30)
      return setError(
        "Please enter some content to analyze. It is Less than expected"
      );

    try {
      setError("");
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
      setError(`Error during request: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className={`min-h-screen flex flex-col items-center ${messages ? "justify-start" : "justify-center"
        }`}
    >
      {!messages && (
        <form
          className="relative flex flex-col justify-center items-center gap-4 w-full"
          onSubmit={handleAnalyze}
        >
          <h3 className="font-medium text-32 text-center max-lg:text-24">
            Analyze Post Content
          </h3>

          {error && <p className="text-red-500 text-14 mb-4">{error}</p>}

          <textarea
            required
            type="text"
            placeholder={placeholder}
            value={userInput}
            onChange={handleChange}
            className="h-96 w-3/4 max-md:w-10/12 mx-auto text-18 p-3 border-2 border-lemon-dark rounded-xl resize-none outline-none"
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
      {messages && (
        <div className="self-start flex flex-col items-center gap-10 w-11/12 py-10 mx-auto">
          <div className="w-60 h-60">
            <img src={chillguy} alt="" className="rounded-2xl" />
          </div>
          <div className="generated-content">
            <Markdown>{messages}</Markdown>
          </div>

          {!isSave && (
            <button
              className="bg-lemon-dark w-1/4 max-lg:w-1/2 self-center py-4 px-8 rounded-xl text-18 font-medium"
              onClick={handleSave}
            >
              {isLoading ? "Saving..." : "Save to history"}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
