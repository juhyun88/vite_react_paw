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
        ftcolor: "var(--ft-color)",
        mint:"var(--mint)",
        fttextcolor:"var(--fttextcolor)",
        mainbutton:"var(--mainbutton)",
        quickcolor:"var(--quickcolor)",
        topcolor:"var(--topcolor)"
      },
      borderRadius: {
        custom: "var(--border-radius)",
      },
      fontFamily: {
        thin: ['Paperlogy', "sans-serif"],
        extralight: ['Paperlogy', "sans-serif"],
        light: ['Paperlogy', "sans-serif"],
        regular: ['Paperlogy', "sans-serif"],
        medium: ['Paperlogy', "sans-serif"],
        semibold: ['Paperlogy', "sans-serif"],
        bold: ['Paperlogy', "sans-serif"],
        mango: ['MangoDdobak-B', "sans-serif"],
      },
      maxWidth: {
        container: "1400px",
        large: "1920px"
      },     
      fontSize: {
        '41px': '41px',
      },
      
    },
  },
  plugins: [],
}
