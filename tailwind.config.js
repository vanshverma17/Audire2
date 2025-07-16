/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
            zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
};
