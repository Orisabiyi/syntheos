import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-24 grid grid-cols-2 gap-10 text-16 text-gray-600 font-medium">
      <div>
        <h2 className="text-28 font-semibold">Opra</h2>
        <p>Smarter Posts, Better Results</p>
      </div>

      <ul className="grid grid-cols-2">
        <li>
          <HashLink>Home</HashLink>
        </li>
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

      <p>&copy; 2024 Opra. All rights reserved.</p>

      <ul className="flex items-center gap-10">
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Cookie Policy</li>
      </ul>
    </footer>
  );
}
