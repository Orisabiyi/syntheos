import { NavLink } from "react-router-dom";

import Faqs from "../components/Faqs";
import OpraWork from "../components/OpraWork";
import ChooseOpra from "../components/ChooseOpra";

export default function Home() {
  // const navigate = useNavigate();

  // const handleAuth = async function () {
  //   try {
  //     const value = await handleGoogleAuth();
  //     if (value?.user) {
  //       navigate("/dashboard");
  //       console.log(value.user.uid);
  //       sessionStorage.setItem("userID", value.user.uid);
  //     }
  //   } catch (error) {
  //     console.error("Authentication failed:", error);
  //   }
  // };

  // const handleTwitter = async function () {
  //   try {
  //     const value = await handleTwitterAuth();

  //     if (value?.user) {
  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //     console.error("Authentication failed:", error);
  //   }
  // };

  return (
    <main className="bg-gray-100">
      <nav className="px-16 py-8 flex items-center justify-between">
        <h1 className="text-32 font-semibold">OPRA</h1>

        <ul className="flex gap-10 text-16 font-medium">
          <li>
            <NavLink to="/#why-choose-opra">Why Choose Opra</NavLink>
          </li>
          <li>How Opra Works</li>
          <li>FAQS</li>
        </ul>

        <button>Get Started</button>
      </nav>

      <ChooseOpra />

      <OpraWork />

      <Faqs />
    </main>
  );
}
