/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-7px)' },
            },
        },
        animation: {
            float: 'float 3s ease-in-out infinite',
        },
        boxShadow: {
            'accent-glow': '0 0 50px var(--accent-glow)',
        }
    },
},
plugins: [],
}

