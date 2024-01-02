module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f4f6fa",
          700: "#666666",
          800: "#393939",
          900: "#08173b",
        },
        blue_gray: {
          50: "#eaedf2",
          100: "#d9d9d9",
          500: "#6f6c99",
          600: "#5f6b7f",
          700: "#4c4c66",
          "500_01": "#6e6b99",
          "600_0c": "#606c800c",
          "700_ab": "#4c4b66ab",
        },
        light_blue: { 800: "#0071bc", "800_a2": "#0071bca2" },
        white: { A700_01: "#fdfdff", A700: "#ffffff" },
        deep_orange: { A700: "#f72116" },
      },
      boxShadow: {
        bs1: "0px 0px  20px 0px #0071bc",
        bs: "0px 1px  3px 0px #606c800c",
      },
      backgroundImage: {
        gradient: "linear-gradient(162deg ,#0071bc,#08173b)",
        gradient1: "radial-gradient(#ffffff,#fdfdff)",
      },
      fontFamily: { helveticaneue: "Helvetica Neue", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
