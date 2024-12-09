import { useState } from "react";
import { faqs } from "../utils/features";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Faqs() {
  const [faqsOpen, setFaqsOpen] = useState({ type: false, index: 0 });


  return (
    <section className="bg-gradient-to-b from-gray-300 to-gray-100 flex flex-col items-center gap-10 p-32">
      <h2 className="text-32 font-semibold leading-none">FAQS</h2>

      <ul className="flex flex-col w-full gap-10">
        {faqs.map((faq, index) => (
          <li
            key={index}
            onClick={() => setFaqsOpen({ type: !faqsOpen.type, index })}
          >
            <h4 className="w-full bg-gray-100 p-10 rounded-lg text-20 font-medium flex items-center justify-between cursor-pointer">
              <span>{faq.question}</span>
              <MdOutlineKeyboardArrowDown
                size={24}
                className={
                  faqsOpen.type && index === faqsOpen.index ? "rotate-180" : ""
                }
              />
            </h4>

            {faqsOpen.type && index === faqsOpen.index && (
              <p className="w-full p-4 rounded-lg text-16 font-medium">
                {faq.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
