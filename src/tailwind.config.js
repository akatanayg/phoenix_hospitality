
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
    },
    keyframes: {
        fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
    },
    },
  },
  plugins: [],
};

