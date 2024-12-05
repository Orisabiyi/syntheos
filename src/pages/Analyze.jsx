import { useNavigate } from "react-router-dom";

export default function Analyze() {
  const navigate = useNavigate();

  const handlePasteClick = () => {
    navigate("/dashboard/analyzer");
  };
  return (
    <div className="w-full min-h-screen py-2 px-2">
      <div className="flex flex-row justify-center min-h-screen items-center gap-10 max-lg:flex-col">
        <button className="h-32 bg-lemon-dark w-80 text-black rounded-xl text-20 relative border-2 border-lemon-dark">
          Select from X
          <div className="absolute inset-0 bg-white/[0.5] flex justify-center items-center font-semibold">
            coming soon
          </div>
        </button>
        <button
          className="h-32 border-2 border-black w-80 rounded-lg text-20"
          onClick={handlePasteClick}
        >
          Analyze Post
        </button>
      </div>
    </div>
  );
}
