/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
/*
npx tailwindcss -i ./src/styles/main.css -o ./public/publicstyles.css --watch
*/