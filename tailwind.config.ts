import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#095E97',
        softBlue: '#6787AE',
        regularSoftBlue: '#A0B4CD',
        ultraSoftBlue: '#E6EFF5',
        strongBlue:'#06426A',
        darkBlue: '#053453',
        regularBlue: '#053453',
        secondary: '#F8CA00',
        hardGray: '#435861',
        regularGray: '#8097A2',
        normalGray: '#BFCBD1',
        softGray: '#F2F2F2',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
