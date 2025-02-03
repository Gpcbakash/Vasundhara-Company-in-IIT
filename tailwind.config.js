/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans your React/Vite project
    "./components/**/*.{js,ts,jsx,tsx}" // Includes component folders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
