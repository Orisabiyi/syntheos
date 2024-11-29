import { useNavigate } from "react-router-dom";
import { handleGoogleAuth } from "../firebase/GoogleAuth";

export default function Auth() {
  const navigate = useNavigate();

  const handleAuth = async function () {
    try {
      const value = await handleGoogleAuth();
      if (value?.user) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-lemon-default">
      <nav className="p-8">
        <h1 className="text-32 font-semibold">Syntheos</h1>
      </nav>

      <section className="flex flex-col items-center justify-center flex-1">
        <figure></figure>

        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-32 font-semibold">Welcome to Syntheos</h1>

          <button
            className="bg-lemon-dark text-16 px-8 py-4 w-72 rounded-xl"
            onClick={handleAuth}
          >
            Join with Google
          </button>

          <button className="bg-lemon-dark text-16 px-8 py-4 w-72 rounded-xl">
            Join with X
          </button>
        </div>
      </section>
    </main>
  );
}
