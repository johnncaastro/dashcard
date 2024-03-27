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
      gap: {
        '1/4': '0.25px',
      },
      padding: {
        18: '4.5rem',
        21: '5.25rem',
      },
      minHeight: {
        '9/10': '90%',
      },
      colors: {
        gray: {
          300: '#b7b7b7',
          500: '#4f4f4f',
          700: '#222222',
          900: '#1c1c1c',
        },
        orange: {
          500: '#fc773c',
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
