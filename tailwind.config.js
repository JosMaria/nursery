const withOpacity = (variableName) => {
  return ({ opacityValue }) =>
    opacityValue ? `rgba(var(${variableName}), ${opacityValue})` : `rgb(var(${variableName}))`;
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
        custom: {
          dark: withOpacity('--color-dark'),
          light: withOpacity('--color-light'),
          'dark-hover': withOpacity('--color-dark-hover'),
          medium: withOpacity('--color-medium'),
        },
      },
      textColor: {
        custom: {
          light: withOpacity('--color-light'),
          dark: withOpacity('--color-dark-hover'),
        },
      },
      borderColor: {
        custom: {
          light: withOpacity('--color-light'),
          dark: withOpacity('--color-dark'),
        },
      },
      colors: {
        custom: withOpacity('--color-dark'),
      },
      ringColor: {
        custom: {
          dark: withOpacity('--color-dark'),
        },
      },
    },
  },
  plugins: [],
};
