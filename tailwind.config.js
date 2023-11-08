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
        custom: {
          dark: withOpacity('--color-dark'),
          light: withOpacity('--color-light'),
          'dark-hover': withOpacity('--color-dark-hover'),
        },
        skin: {
          dark: withOpacity('--fill-color-dark'),
          light: withOpacity('--fill-color-light'),
          nav: withOpacity('--fill-color-nav-selected'),
          form: withOpacity('--fill-color-form'),
          btn: withOpacity('--fill-color-btn'),
          'btn-hover': withOpacity('--fill-color-btn-hover'),
          skeleton: withOpacity('--fill-skeleton'),
        },
      },
      textColor: {
        custom: {
          light: withOpacity('--color-light'),
          dark: withOpacity('--color-dark-hover')
        },
        skin: {
          dark: withOpacity('--text-color-dark'),
          light: withOpacity('--text-color-light'),
        },
      },
      borderColor: {
        custom: {
          light: withOpacity('--color-light'),
        },
        skin: {
          nav: withOpacity('--border-nav-selected'),
          focus: withOpacity('--fill-color-btn-hover'),
          skeleton: withOpacity('--fill-skeleton'),
          list: withOpacity('--fill-color-form'),
        },
      },
      gradientColorStops: {
        card: {
          start: withOpacity('--gradient-from'),
          end: withOpacity('--gradient-to'),
        },
      },
      ringColor: {
        skin: {
          input: withOpacity('--fill-color-btn-hover'),
          btn: withOpacity('--fill-color-btn-hover'),
        },
      },
    },
  },
  plugins: [],
};
