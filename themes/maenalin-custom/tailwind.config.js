/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "../../content/**/*.md"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      colors: {
        primary: {
          DEFAULT: "#a20021",
        },
      },
    },
  },
  plugins: [],
};
