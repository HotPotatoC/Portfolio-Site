// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
      },
    },
  },
  variants: {},
};
