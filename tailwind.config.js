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
            shine: {
            '0%': { backgroundPosition: '100%' },
            '100%': { backgroundPosition: '-100%' },
            },
            gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
            },
        },
        animation: {
            float: 'float 3s ease-in-out infinite',
            shine: 'shine 5s linear infinite',
            gradient: 'gradient 8s ease infinite',
        },
        boxShadow: {
            'accent-glow': '0 0 50px var(--accent-glow)',
        }
    },
},
plugins: [],
}

