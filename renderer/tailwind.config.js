/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./renderer/pages/**/*.{js,ts,jsx,tsx}",
      "./renderer/components/**/*.{js,ts,jsx,tsx}",
      "./renderer/features/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }