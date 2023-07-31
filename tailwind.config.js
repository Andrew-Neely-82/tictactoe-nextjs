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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        transform: "transform",
      },
      borderRadius: {
        "border-rad": "0.5em !important",
      },
    },
  },
  plugins: [],
};
