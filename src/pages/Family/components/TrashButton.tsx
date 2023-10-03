import { BsTrashFill } from 'react-icons/bs';

interface TrashButtonProps {
  action: () => void;
}
export const TrashButton = ({ action }: TrashButtonProps) => (
  <button
    type='button'
    onClick={action}
    className='focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5'
  >
    <BsTrashFill />
  </button>
);
