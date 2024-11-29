
export default function Analyzer() {
  const handleAnalyze = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const requestBody = {
      contents: [{
        parts: [
          { text: "how are you" }
        ]
      }]
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data) {
        console.log('Generated text:', data.candidates?.[0]?.contents.parts?.[0]?.text);
      } else {
        console.log('No text found in the response.');
      }

    } catch (error) {

      console.error('Error during API request:', error);
    }
  };


  return (
    <div className="w-full h-full py-2 px-2">
      <div className="flex flex-col justify-center h-full items-center gap-10">
        <input type="text" placeholder="
        Enter the content to optimise" className="w-1/2 h-40 bg-transparent border-2 border-black text-12 px-5 p-0" />

        <button className=" bg-lemon-dark text-black text-16 font-medium rounded-md h-20 w-60" onClick={handleAnalyze}>
          Analyze
        </button>
      </div>
    </div>
  )
}
