/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "rgb(255, 70, 37) !important",
        "custom-blue": "rgb(44, 135, 255) !important",
        "custom-white": "#fff !important",
        "custom-black": "#444 !important",
        "bg-hover": "#ccc !important",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        transform: "transform",
        all: "all !important",
      },
      borderRadius: {
        "border-rad": "0.5em !important",
      },
      transitionTimingFunction: {
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1) !important",
      },
      transitionDuration: {
        DEFAULT: "250ms !important",
        all: "",
      },
      borderWidth: {
        DEFAULT: "4px !important",
      },
    },
  },
  plugins: [],
};
