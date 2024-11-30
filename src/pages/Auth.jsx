import { useNavigate } from "react-router-dom";
import { handleGoogleAuth } from "../firebase/GoogleAuth";
import { handleTwitterAuth } from "../firebase/TwitterAuth";

export default function Auth() {
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
    <main className="min-h-screen flex flex-col bg-lemon-default">
      <nav className="px-16 py-8">
        <h1 className="text-32 font-semibold">Syntheos</h1>
      </nav>

      <section className="flex flex-col items-center justify-center flex-1">
        <figure></figure>

        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-32 font-semibold">Welcome to Syntheos</h1>

          <button
            className="bg-lemon-dark text-16 px-8 py-4 w-72 rounded-xl cursor-pointer"
            onClick={handleAuth}
          >
            Join with Google
          </button>

          <button
            className="bg-lemon-dark text-16 px-8 py-4 w-72 rounded-xl cursor-pointer"
            onClick={handleTwitter}
          >
            Join with X
          </button>
        </div>
      </section>
    </main>
  );
}
