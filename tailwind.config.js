/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      maxWidth: {
        app: '1440px',
      },
      gridTemplateColumns: {
        app: '5rem 1fr',
      },
      padding: {
        18: '4.5rem',
        21: '5.25rem',
      },
      colors: {
        gray: {
          500: '#4f4f4f',
          700: '#222222',
        },
        white: {
          100: '#fff',
          300: '#f2f3f5',
        },
      },
    },
  },
  plugins: [],
}
