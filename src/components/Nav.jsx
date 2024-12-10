import { HashLink } from "react-router-hash-link";

export default function Nav() {
  return (
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

      <button className="bg-white rounded-lg py-4 px-12 text-16 transition-all duration-500 hover:bg-gray-200">
        Get Started
      </button>
    </nav>
  );
}
