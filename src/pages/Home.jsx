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
    <main className="bg-gray-100">
      <nav className="px-16 py-8">
        <h1 className="text-32 font-semibold">OPRA</h1>
      </nav>

      <header className="flex items-center justify-between h-[90vh] p-16 gap-20 bg-gradient-to-b from-gray-100 to-gray-300">
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

      <section className="flex flex-col items-center gap-10 p-24 bg-gradient-to-b from-gray-300 to-gray-100">
        <h2 className="text-36 font-semibold leading-none">Why Choose Opra</h2>
        <h4 className="text-24 font-medium mb-8 leading-none">
          Unlock the Power of AI to Enhance Your Social Media Strategy
        </h4>

        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <li
              key={index}
              className="p-10 rounded-lg border-gray-400 border-2 hover:border-gray-500 hover:rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-1000 ease-in-out cursor-pointer"
            >
              {feature.title === "Engagement Metrics" && (
                <BiLineChart size={70} className="text-gray-600" />
              )}
              {feature.title === "Suggested Improvements" && (
                <FiTarget size={70} className="text-gray-600" />
              )}
              {feature.title === "Hashtag Recommendations" && (
                <BiHash size={70} className="text-gray-600" />
              )}
              {feature.title === "Post Format Suggestions" && (
                <BiLayout size={70} className="text-gray-600" />
              )}
              {feature.title === "Historical Analysis" && (
                <MdHistory size={70} className="text-gray-600" />
              )}
              {feature.title === "Multi-Platform Support" && (
                <MdDevices size={70} className="text-gray-600" />
              )}
              {feature.title === "Precision Targeting" && (
                <AiOutlineAim size={70} className="text-gray-600" />
              )}
              {feature.title === "Goal Tracking" && <FiTarget size={70} />}
              {feature.title === "Performance Scaling" && (
                <FiMaximize2 size={70} className="text-gray-600" />
              )}

              <h3 className="text-20 text-gray-900 font-semibold leading-none">
                {feature.title}
              </h3>
              <p className="text-16 text-gray-900 font-medium text-center leading-none">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col items-center gap-10 p-32 bg-gradient-to-b from-gray-100 to-gray-300">
        <h2 className="text-32 font-semibold leading-none">How Opra Works</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full mt-8">
          <li className="flex flex-col items-center justify-center gap-4 text-center">
            <h3 className="text-22 text-center font-semibold">
              <span className="block">1</span>
              <span>Sign Up</span>
            </h3>
            <p className="text-center text-16 text-gray-600">
              Create an account with your email and password
            </p>
          </li>

          <li className="flex flex-col items-center justify-center gap-4 text-center">
            <h3 className="text-22 text-center font-semibold">
              <span className="block">2</span>
              <span>Analyze</span>
            </h3>
            <p className="text-center text-16 text-gray-600">
              Enter your post content or fetch it from your social media
              accounts
            </p>
          </li>

          <li className="flex flex-col items-center justify-center gap-4 text-center">
            <h3 className="text-22 text-center font-semibold">
              <span className="block">3</span>
              <span>Optimize</span>
            </h3>
            <p className="text-center text-16 text-gray-600">
              Get detailed analysis and suggestions for improvement
            </p>
          </li>

          <li className="flex flex-col items-center justify-center gap-4 text-center">
            <h3 className="text-22 text-center font-semibold">
              <span className="block">4</span>
              <span>Save</span>
            </h3>
            <p className="text-center text-16 text-gray-600">
              Store your analyzed content for future reference
            </p>
          </li>
        </ul>
      </section>

      <section className="bg-gradient-to-b from-gray-300 to-gray-100 flex flex-col items-center gap-10 p-32">
        <h2 className="text-32 font-semibold leading-none">FAQS</h2>

        <ul>
          <li>
            <h4>How does Opra AI Post Analyzer work?</h4>
            <p>
              Opra&apos;s post analyzer uses advanced AI algorithms to analyze
              your social media content. Simply enter your post text or fetch it
              directly from your connected social media accounts. The analyzer
              then provides detailed insights, including engagement metrics,
              suggested improvements, hashtag recommendations, and post format
              suggestions. This helps you optimize your content for maximum
              reach and engagement.
            </p>
          </li>

          <li>
            <h4>What Platforms are supported?</h4>
            <p>
              Opra currently supports Twitter and is actively working on
              expanding support to other major social media platforms, including
              Instagram, Facebook, LinkedIn, and more. Our goal is to provide a
              comprehensive tool that helps you optimize your content across all
              your social media channels.
            </p>
          </li>

          <li>
            <h4>How Accurate are the engagement metrics?</h4>
            <p>
              Our engagement predictions are based on sophisticated machine
              learning models that analyze a wide range of data points,
              including historical performance, current trends, and audience
              behavior. While no prediction can be 100% accurate, our models are
              continuously refined to provide the most reliable insights
              possible. Many of our users have reported significant increases in
              engagement after using our suggestions.
            </p>
          </li>

          <li>
            <h4>Is my data secure?</h4>
            <p>
              Absolutely. Your data security is our top priority. We use
              industry-standard encryption and secure servers to protect your
              information. Additionally, we comply with all relevant data
              protection regulations to ensure your data is handled responsibly
              and securely
            </p>
          </li>

          <li>
            <h4>How do I get started with Opra?</h4>
            <p>
              Getting started with Opra is easy. Simply sign up with your email
              and password. Once you&apos;re logged in, you can start analyzing
              your posts immediately. Enter your post content or connect your
              social media accounts to fetch posts directly. Our user-friendly
              dashboard will guide you through the process.
            </p>
          </li>

          <li>
            <h4>How does Opra help improve my social media strategy?</h4>
            <p>
              Opra provides actionable insights and recommendations based on AI
              analysis of your content. By understanding what works best for
              your audience, you can create more engaging posts, increase your
              reach, and drive more traffic to your pages. Our detailed
              analytics and historical performance tracking help you refine your
              strategy over time.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
