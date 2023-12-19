import { BiLogOut } from 'react-icons/bi';

interface ButtonProps {
  action?: () => void;
}

export const CloseButton = ({ action }: ButtonProps) => (
  <button
    className='leading-none rounded-md text-2xl hover:bg-custom-dark-hover lg:hidden w-8 h-8'
    onClick={action}
  >
    &times;
  </button>
);

export const HambuguerButton = ({ action }: ButtonProps) => (
  <button
    className='leading-none rounded-md text-3xl hover:bg-custom-dark-hover lg:hidden w-8 h-8'
    onClick={action}
  >
    &equiv;
  </button>
);

export const LogoutButton = ({}: ButtonProps) => (
  <button className='flex justify-center items-center font-semibold text-2xl rounded-md hover:bg-custom-dark-hover leading-none p-2'>
    <BiLogOut />
  </button>
);
