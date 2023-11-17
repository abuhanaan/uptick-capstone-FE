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
        neutralTwo: "#4d4d4d",
        fair: "#070C19",
        plain: "rgba(0,0,0,.3)",
        "program-bg": "#1e1e1e",
        "light-blue": "#1C3166",
        "testimonial-bg": "#edf2ff",
        "neutral-10": "#e6e6e6",
        "neutral-6": "#808080",
        "light-slate-gray": " rgba(255, 255, 255, 1)",
      },
    },
  },
  plugins: [],
};
