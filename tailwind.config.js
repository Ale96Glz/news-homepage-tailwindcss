module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "soft-orange": "hsl(35, 77%, 62%)",
          "soft-red": "hsl(5, 85%, 63%)",
        },
        neutral: {
          "off-white": "hsl(36, 100%, 99%)",
          "grayish-blue": "hsl(233, 8%, 79%)",
          "dark-grayish-blue": "hsl(236, 13%, 42%)",
          "very-dark-blue": "hsl(240, 100%, 5%)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        body: "15px",
      },
    },
  },
  plugins: [],
};
