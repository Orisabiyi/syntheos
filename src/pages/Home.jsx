import { FcGoogle } from "react-icons/fc";
import { RiTwitterXFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { handleGoogleAuth } from "../firebase/GoogleAuth";
import { handleTwitterAuth } from "../firebase/TwitterAuth";
import social from "../assets/social.jpeg";
import { features } from "../utils/features";
import { FiMaximize2, FiTarget } from "react-icons/fi";
import { BiHash, BiLayout, BiLineChart } from "react-icons/bi";
import { MdDevices, MdHistory } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";

export default function Home() {
  const navigate = useNavigate();

  const handleAuth = async function () {
    try {
      const value = await handleGoogleAuth();
      if (value?.user) {
        navigate("/dashboard");
        console.log(value.user.uid);
        sessionStorage.setItem("userID", value.user.uid);
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  const handleTwitter = async function () {
    try {
      const value = await handleTwitterAuth();

      if (value?.user) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <main className="bg-gray-200">
      <nav className="px-16 py-8">
        <h1 className="text-32 font-semibold">OPRA</h1>
      </nav>

      <header className="flex items-center justify-between h-[90vh] px-16 gap-20">
        <div className="w-1/2 flex flex-col gap-10">
          <h2 className="text-60 leading-tight font-semibold">
            <span className="hover:bg-white hover:px-3 hover:rotate-90 rounded-lg cursor-pointer transition-all duration-200 delay-100">
              Optimize
            </span>{" "}
            your Social Media{" "}
            <span className="hover:bg-white hover:px-3 hover:-rotate-45 cursor-pointer transition-all duration-200 delay-100">
              Content
            </span>{" "}
            for Maximum{" "}
            <span className="hover:bg-white hover:px-3 hover:-rotate-45 cursor-pointer transition-all duration-200 delay-100">
              Engagement
            </span>
          </h2>

          <p className="text-32 font-medium">
            Analyze, Improve, and Drive Traffic with Opra&apos;s AI-Powered Post
            Analyzer
          </p>

          <button className="self-start bg-white rounded-lg font-medium p-6 w-80 text-20 transition-all duration-500 hover:bg-gray-100">
            Get Started
          </button>

          {/* <ul className="flex gap-10">
            <li>
              <button
                className="flex items-center gap-2 text-20"
                onClick={handleAuth}
              >
                Join with <FcGoogle size={32} />
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-2 text-20"
                onClick={handleTwitter}
              >
                Join with <RiTwitterXFill size={32} />
              </button>
            </li>
          </ul> */}
        </div>

        <figure className="flex-1">
          <img src={social} alt="social-img" className="rounded-xl" />
        </figure>
      </header>

      <section>
        <h2>Why Choose Opra</h2>
        <h4>Unlock the Power of AI to Enhance Your Social Media Strategy</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                {feature.title === "Engagement Metrics" && (
                  <BiLineChart className="text-4xl text-primary" />
                )}
                {feature.title === "Suggested Improvements" && (
                  <FiTarget className="text-4xl text-primary" />
                )}
                {feature.title === "Hashtag Recommendations" && (
                  <BiHash className="text-4xl text-primary" />
                )}
                {feature.title === "Post Format Suggestions" && (
                  <BiLayout className="text-4xl text-primary" />
                )}
                {feature.title === "Historical Analysis" && (
                  <MdHistory className="text-4xl text-primary" />
                )}
                {feature.title === "Multi-Platform Support" && (
                  <MdDevices className="text-4xl text-primary" />
                )}
                {feature.title === "Precision Targeting" && (
                  <AiOutlineAim className="text-4xl text-primary" />
                )}
                {feature.title === "Goal Tracking" && (
                  <FiTarget className="text-4xl text-primary" />
                )}
                {feature.title === "Performance Scaling" && (
                  <FiMaximize2 className="text-4xl text-primary" />
                )}

                <h3 className="text-xl font-semibold mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
