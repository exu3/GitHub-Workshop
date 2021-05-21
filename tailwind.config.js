module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pink: "#FF9598",
      },
      fontFamily: {
        sofia: "Sofia Pro, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
