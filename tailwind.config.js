/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "text-14": "1.4rem",
        "text-16": "1.6rem",
        "text-18": "1.8rem",
        "text-20": "2.0rem",
        "text-22": "2.2rem",
        "text-24": "2.4rem",
        "text-26": "2.6rem",
        "text-28": "2.8rem",
        "text-30": "3.0rem",
        "text-32": "3.2rem",
        "text-34": "3.4rem",
        "text-36": "3.6rem",
        "text-38": "3.8rem",
        "text-40": "4.0rem",
      },
      colors: {
        lemon: {
          default: "#e6f2d3",
          dark: "#d3e6b5",
        },
      },
    },
  },
  plugins: [],
};
