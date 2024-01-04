type ColorButtonType = 'red' | 'yellow' | 'teal';

type Props = {
  action?: () => void;
  color: ColorButtonType;
  children: JSX.Element;
};

export const IconButton = ({ color, action, children }: Props) => (
  <button className={getButtonTheme(color)} type='button' onClick={action}>
    {children}
  </button>
);

const getButtonTheme = (color: ColorButtonType): string => {
  const styleCommon = 'focus:outline-none border  focus:border focus:border-custom-light focus:ring-2 rounded p-1.5';
  if (color === 'red') {
    return `${styleCommon} focus:ring-red-400 bg-red-500 hover:bg-red-600`;
  } else if (color === 'yellow') {
    return `${styleCommon} bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-400`;
  } else if (color === 'teal') {
    return `${styleCommon} bg-teal-600 hover:bg-teal-700 focus:ring-teal-600`;
  }

  throw new Error(`Color: ${color} to button not found.`);
};
