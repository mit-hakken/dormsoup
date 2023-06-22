const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--plex-sans-font)', ...fontFamily.sans],
        serif: ['var(--plex-serif-font)', ...fontFamily.serif],
      },
      maxHeight: {
        "shorter-screen": "calc(100vh - 4rem)",
      }
    },
  },
  plugins: [],
}
