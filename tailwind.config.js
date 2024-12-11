/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        14: "1.4rem",
        16: "1.6rem",
        18: "1.8rem",
        20: "2.0rem",
        22: "2.2rem",
        24: "2.4rem",
        28: "2.8rem",
        32: "3.2rem",
        34: "3.4rem",
        36: "3.6rem",
        38: "3.8rem",
        40: "4.0rem",
        50: "5rem",
        60: "6.0rem",
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
