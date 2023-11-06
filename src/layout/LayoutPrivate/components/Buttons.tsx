import { BiLogOut } from 'react-icons/bi';

interface ButtonProps {
  action?: () => void;
}

export const CloseButton = ({ action }: ButtonProps) => (
  <button
    className='leading-none rounded-md text-2xl active:bg-sky-900 lg:hidden w-8 h-8'
    onClick={action}
  >
    &times;
  </button>
);

export const HambuguerButton = ({ action }: ButtonProps) => (
  <button
    className='leading-none rounded-md text-3xl active:bg-sky-900 lg:hidden w-8 h-8'
    onClick={action}
  >
    &equiv;
  </button>
);

export const LogoutButton = ({}: ButtonProps) => (
  <button className='flex justify-center items-center font-semibold text-2xl rounded-md hover:bg-sky-900 leading-none w-8 h-8'>
    <BiLogOut />
  </button>
);
