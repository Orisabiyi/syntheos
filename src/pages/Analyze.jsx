import { useNavigate } from "react-router-dom";

export default function Analyze() {
  const navigate = useNavigate()

  const handlePasteClick = () => {
    navigate("/dashboard/analyzer")
  }
  return (
    <div className="w-full h-full py-2 px-2">
      <div className="flex flex-row justify-center h-full items-center gap-10">
        <button className="h-32 bg-black w-80 text-white rounded-lg text-20">
          Select from X
        </button>
        <button className="h-32 border-2 border-black w-80 rounded-lg text-20" onClick={handlePasteClick}>
          Paste content
        </button>
      </div>
    </div>
  )
}
