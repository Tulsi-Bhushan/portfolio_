/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx,html}',
    './components/**/*.{js,jsx,ts,tsx,html}',
    './app/**/*.{js,jsx,ts,tsx,html}',
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/**/*.html',
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: ["var(--font-jetbrainsMono)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#383E56",
        custom: "#90EE90",
        accent:{
          DEFAULT: "#FFD700",
          hover: '#427D9D',
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
