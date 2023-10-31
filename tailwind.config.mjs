/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
      serif: ["'Source Serif Pro'", ...defaultTheme.fontFamily.serif],
      mono: ["'Source Code Pro'", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
};
