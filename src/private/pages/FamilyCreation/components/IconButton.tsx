const STYLE_ICON_BUTTON = 'focus:outline-none focus:border focus:border-custom-light focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded-md p-1.5';

type Props = {
  action?: () => void;
  children: JSX.Element;
};

export const IconButton = ({ action, children }: Props) => (
  <button className={STYLE_ICON_BUTTON} type='button' onClick={action}>
    {children}
  </button>
);
