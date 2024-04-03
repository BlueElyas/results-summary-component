/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.{html,js}", "./assets/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        Hanken: ["Hanken Grotesk", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        reaction: "hsl(0, 100%, 67%)",
        reactionBg: "hsla(0, 100%, 67%, 0.1)",
        memory: "hsl(39, 100%, 56%)",
        memoryBg: "hsla(39, 100%, 56%, 0.1)",
        verbal: "hsl(166, 100%, 37%)",
        verbalBg: "hsla(166, 100%, 37%, 0.1)",
        visual: "hsl(234, 85%, 45%)",
        visualBg: "hsla(234, 85%, 45%, 0.1)",
        bgGradientBlueSlate: "hsl(252, 100%, 67%)",
        bgGradientBlueRoyal: "hsl(241, 81%, 54%)",
        bgGradientCircleBlueViolet: "hsla(256, 72%, 46%, 1)",
        bgGradientCircleBluePersian: "hsla(241, 72%, 46%, 0)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: " hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
