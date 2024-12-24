/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25292B",
        secondary: "#6A757C",
        blue: "#1F74AD",
        "transparent-blue": "#F3F9FD",
        "light-blue": "#3498DB",
        "dark-blue": "#055285",
        gray: "#50585E",
        "light-gray": "#EBEEF0",
        red: "#E8214C",
        green: "#156635",
        "light-green": "#F2FCF6",
        inactive: "#DBDEE0",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
