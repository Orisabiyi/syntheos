/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "text-14": "1.4rem",
        "text-16": "1.6rem",
        "text-18": "1.8rem",
        "text-20": "2rem",
        "text-24": "2.4rem",
        "text-28": "2.8rem",
        "text-32": "3.2rem",
        "text-36": "3.6rem",
        "text-40": "4rem",
        "text-44": "4.4rem",
        "text-48": "4.8rem",
        "text-52": "5.2rem",
        "text-56": "5.6rem",
        "text-60": "6rem",
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
