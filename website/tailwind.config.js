module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pink: "#FF9598",
      },
      fontFamily: {
        sans: [
                'Sofia Pro',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica',
                'Arial',
                'sans-serif',
                ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
