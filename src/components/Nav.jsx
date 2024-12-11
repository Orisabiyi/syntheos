import { HashLink } from "react-router-hash-link";
import Button from "./Button";

export default function Nav() {
  return (
    <nav className="p-8 lg:px-16 lg:py-8 flex items-center justify-between">
      <h1 className="text-32 font-semibold">OPRA</h1>

      <ul className="hidden lg:flex lg:gap-10 lg:text-16 lg:font-medium">
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

      <Button />
    </nav>
  );
}
