/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        mainBrownLight: "var(--main-brown-light)",
        textColor: "var(--text-color)",
        light: "var(--light-color)",
        highlight: "var(--highlight-color)",
        basicText: "var(--basic-text-color)",
      },
      borderRadius: {
        custom: "var(--border-radius)",
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
        r3: ["'Paperlogy 3 Light'", "sans-serif"],
        r4: ["'Paperlogy 4 Regular'", "sans-serif"],
        r6: ["'Paperlogy 6 SemiBold'", "sans-serif"],
      },
      maxWidth: {
        container: "1400px",
        large: "1920px"
      },     
      
    },
  },
  plugins: [],
}
