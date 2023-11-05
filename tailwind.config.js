/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'translate(0px)'
            },
            '50%': {
                transform: 'translateX(-15px)'
            },
        }
    },
    animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
    }
    },
  },
  plugins: [],
}