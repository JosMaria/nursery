import { ColorButtonType } from '../types';
import { getButtonTheme } from '../utils';

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
