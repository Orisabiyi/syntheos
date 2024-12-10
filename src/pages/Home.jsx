import Faqs from "../components/Faqs";
import OpraWork from "../components/OpraWork";
import ChooseOpra from "../components/ChooseOpra";
import Header from "../components/Header";
import Nav from "../components/Nav";

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
      <Nav />

      <Header />

      <ChooseOpra />

      <OpraWork />

      <Faqs />
    </main>
  );
}
