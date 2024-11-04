/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Bootstrap breakpoints
        xs: "0", // Extra small (no class infix, <576px)
        sm: "576px", // Small (≥576px)
        md: "768px", // Medium (≥768px)
        lg: "992px", // Large (≥992px)
        xl: "1200px", // Extra large (≥1200px)
        xxl: "1400px", // Extra extra large (≥1400px)
      },
    },
  },
  plugins: [daisyui],
};
