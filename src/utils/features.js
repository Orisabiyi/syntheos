import { AiOutlineAim } from "react-icons/ai";
import { BiHash, BiLayout, BiLineChart } from "react-icons/bi";
import { FiMaximize2, FiTarget } from "react-icons/fi";
import { MdDevices, MdHistory, MdOutlineInsights } from "react-icons/md";

export const features = [
  {
    icon: <BiLineChart className="text-4xl text-primary" />,
    title: "Engagement Metrics",
    description: "Predict and optimize engagement for your posts",
  },
  {
    icon: <MdOutlineInsights className="text-4xl text-primary" />,
    title: "Suggested Improvements",
    description: "Get actionable insights to improve your content",
  },
  {
    icon: <BiHash className="text-4xl text-primary" />,
    title: "Hashtag Recommendations",
    description: "Discover the best hashtags for your posts",
  },
  {
    icon: <BiLayout className="text-4xl text-primary" />,
    title: "Post Format Suggestions",
    description: "Ensure your posts are optimized for maximum reach",
  },
  {
    icon: <MdHistory className="text-4xl text-primary" />,
    title: "Historical Analysis",
    description: "Save and review your analyzed content anytime",
  },
  {
    icon: <MdDevices className="text-4xl text-primary" />,
    title: "Multi-Platform Support",
    description: "Compatible with major social media platforms",
  },
  {
    icon: <AiOutlineAim className="text-4xl text-primary" />,
    title: "Precision Targeting",
    description: "Reach your ideal audience effectively",
  },
  {
    icon: <FiTarget className="text-4xl text-primary" />,
    title: "Goal Tracking",
    description: "Monitor and achieve your engagement goals",
  },
  {
    icon: <FiMaximize2 className="text-4xl text-primary" />,
    title: "Performance Scaling",
    description: "Scale your social media impact systematically",
  },
];
