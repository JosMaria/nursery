const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue) return `rgba(var(${variableName}), ${opacityValue})`;

    return `rgb(var(${variableName}))`;
  };
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundColor: {
        skin: {
          base: withOpacity('--color-base'),
        },
      },
    },
  },
  plugins: [],
};
