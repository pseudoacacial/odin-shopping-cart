/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'bg':'var(--bg)',
        'main':'var(--main)',
      },
    },
  },
  plugins: [],
}

