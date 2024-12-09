import { BiHash, BiLayout, BiLineChart } from "react-icons/bi";
import { features } from "../utils/features";
import { FiMaximize2, FiTarget } from "react-icons/fi";
import { MdDevices, MdHistory } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";

export default function ChooseOpra() {
  return (
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
  );
}
