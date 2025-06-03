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
        ice: ['iceHimchan', 'sans-serif'],
        hakgyo: ['"Hakgyoansim Gaeulsopung"', 'sans-serif'],
      },
      maxWidth: {
        container: "1400px",
        large: "1920px"
      },     
      fontSize: {
        '41px': '41px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
         rotate45: {
          '0%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(-10deg)' },
        },
        rotate40: {
          '0%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' },
          '100%': { transform: 'rotate(-20deg)' },
        },
         // 1. 부드럽게 커졌다 작아지기 (심장 박동 느낌)
        pulseScale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
          // 2. 빠르게 커졌다 줄어드는 효과
        pop: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.2)' },
          '60%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      'slide-up': {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0%)' },
      },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        rotate45: 'rotate45 2s ease-in-out infinite',
        rotate40: 'rotate40 1s ease-in-out infinite',
        pulseScale: 'pulseScale 1.5s ease-in-out infinite',
        pop: 'pop 0.6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'slide-up': 'slide-up 0.3s ease-out'
      },      
    },
  },
  plugins: [],
}
