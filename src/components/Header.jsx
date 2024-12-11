import social from "../assets/social.jpeg";
import Button from "./Button";

export default function Header() {
  return (
    <header
      id="Home"
      className="flex items-center justify-between h-[90vh] p-16 gap-20 bg-gradient-to-b from-gray-100 to-gray-300"
    >
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

        <Button />

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
  );
}
