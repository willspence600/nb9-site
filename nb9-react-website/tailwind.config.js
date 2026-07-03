/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#050505',
        offwhite: '#F0F0F0',
        cyan: '#00FFFF',
        magenta: '#FF00FF',
        yellow: '#FFFF00',
        lime: '#39FF14',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
