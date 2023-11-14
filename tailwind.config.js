/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#477BFF",
        white: "#fff",
        dark: "#121212",
        neutral: "#b3b3b3",
        fair: "#070C19",
        plain: "rgba(0,0,0,.3)",
      },
    },
  },
  plugins: [],
};
