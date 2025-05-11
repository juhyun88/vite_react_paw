/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}",
  ],
  theme: {
    extend: {
      colors: {
        primery: "var(--Primery)",
        mainBrownLight: "var(--MainBrownLight)",
        textColor: "var(--text-color)",
        light: "var(--light-color)",
      },
      fontFamily: {
        thin: ["'Paperlogy 1 Thin'", "sans-serif"],
        extralight: ["'Paperlogy 2 ExtraLight'", "sans-serif"],
        light: ["'Paperlogy 3 Light'", "sans-serif"],
        regular: ["'Paperlogy 4 Regular'", "sans-serif"],
        medium: ["'Paperlogy 5 Medium'", "sans-serif"],
        semibold: ["'Paperlogy 6 SemiBold'", "sans-serif"],
        bold: ["'Paperlogy 7 Bold'", "sans-serif"],
        mango: ["'MangoDdobak-B'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
      },
    },
  },
  plugins: [],
}
