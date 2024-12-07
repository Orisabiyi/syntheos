import { FcGoogle } from "react-icons/fc";
import { RiTwitterXFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { handleGoogleAuth } from "../firebase/GoogleAuth";
import { handleTwitterAuth } from "../firebase/TwitterAuth";
import social from "../assets/social.jpeg";

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
      </section>
    </main>
  );
}
