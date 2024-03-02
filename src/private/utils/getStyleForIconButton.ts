import { ColorButtonType } from '../types';

const STYLE_COMMON = 'focus:outline-none border focus:border focus:border-custom-light focus:ring-2 rounded p-1.5 max-sm:p-1';

export const getButtonTheme = (color: ColorButtonType): string => {
  if (color === 'red') {
    return `${STYLE_COMMON} focus:ring-red-400 bg-red-500 hover:bg-red-600`;
  } else if (color === 'yellow') {
    return `${STYLE_COMMON} bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-400`;
  } else if (color === 'teal') {
    return `${STYLE_COMMON} bg-teal-600 hover:bg-teal-700 focus:ring-teal-600`;
  } else if (color === 'slate') {
    return `${STYLE_COMMON} bg-slate-500 hover:bg-slate-600 focus:ring-slate-500`;
  }

  throw new Error(`Color: ${color} to button not found.`);
};
