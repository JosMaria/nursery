/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        form: {
          color: 'var(--COLOR-BG-FORM)'
        },
        paint: {
          brown: 'var(--COLOR-BROWN)',
        },
      },
      borderColor: {
        form: {
          color: 'var(--COLOR-BORDER-FORM)'
        }
      },
    },
  },
  plugins: [],
}

