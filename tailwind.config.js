/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/hero.jpg')",
      },
    },
  },
  plugins: []
}
