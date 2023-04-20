/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/hero.jpg')",
      },
    },
  },
  plugins: []
}
