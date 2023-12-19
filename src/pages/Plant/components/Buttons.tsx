import { BsTrashFill } from 'react-icons/bs';

export const Buttons = () => {
  return <div>Buttons</div>;
};

interface ButtonProps {
  action?: () => void;
}

export const TrashButton = ({ action }: ButtonProps) => (
  <button
    type='button'
    onClick={action}
    className='bg-red-500 hover:bg-red-600 border focus:border-white focus:outline-none focus:ring focus:ring-red-400 text-white font-bold leading-3 p-1.5 rounded'
  >
    <BsTrashFill />
  </button>
);

export const CloseButton = ({ action }: ButtonProps) => (
  <button
    className='bg-red-500 hover:bg-red-600 border focus:border-white focus:outline-none focus:ring focus:ring-red-400 text-white font-bold text-xl leading-3 p-1 rounded'
    type='button'
    onClick={action}
  >
    &times;
  </button>
);
