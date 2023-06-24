/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#a20021",
        },
      },
    },
  },
  plugins: [],
};
