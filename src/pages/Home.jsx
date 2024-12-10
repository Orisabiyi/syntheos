import { HashLink } from "react-router-hash-link";

import Faqs from "../components/Faqs";
import OpraWork from "../components/OpraWork";
import ChooseOpra from "../components/ChooseOpra";
import Header from "../components/Header";

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
            <HashLink smooth to="#why-choose-opra">
              Why Choose Opra
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#how-opra-works">
              How Opra Works
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#faqs">
              FAQS
            </HashLink>
          </li>
        </ul>

        <button>Get Started</button>
      </nav>

      <Header />

      <ChooseOpra />

      <OpraWork />

      <Faqs />
    </main>
  );
}
