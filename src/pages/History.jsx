import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { handleGetHistory } from "../firebase/firestore";
import chill from "../assets/chillguy.jpg";

export default function History() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState([]);

  useEffect(function () {
    async function handleAnalyze() {
      try {
        setIsLoading(true);

        const res = await handleGetHistory();
        console.log(res);
        setValue(res);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    handleAnalyze();
  }, []);

  return (
    <div className="min-h-screen w-full">
      {value.length <= 0 && !isLoading ? (
        <div className="h-screen w-full flex flex-col gap-10 justify-center items-center">
          <div className="h-80 w-80 max-md:w-60 max-md:h-60">
            <img src={chill} alt="" className="rounded-2xl" />
          </div>
          <h1 className="text-20 font-medium text-center max-lg:text-16">
            Just take a chill pill and analyze a post
          </h1>
          <Link
            to={"/dashboard/analyze"}
            className="text-18 max-lg:text-16 font-medium bg-lemon-dark p-5 rounded-2xl"
          >
            Analyze a post
          </Link>
        </div>
      ) : (
        <div className="h-full w-full py-10 px-10 flex flex-col gap-5">
          <h1 className="text-20">History</h1>
          {value?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-lemon-dark p-5 rounded-2xl text-16"
            >
              <span>{new Date(item.date).toDateString()}</span>

              <ReactMarkdown>{item.content}</ReactMarkdown>
            </div>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="h-screen w-full flex flex-col gap-10 justify-center items-center">
          <div className="h-80 w-80">
            <img src={chill} alt="" className="rounded-2xl" />
          </div>
          <h1 className="text-20 font-medium text-center">Loading...</h1>
        </div>
      )}
    </div>
  );
}
