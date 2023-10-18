import { BiEdit } from 'react-icons/bi';

interface EditButtonProps {
  isShow: boolean;
  action?: () => void;
}

export const EditButton = ({ isShow, action }: EditButtonProps) => (
  <button
    className={`${
      isShow && 'opacity-60'
    } bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded-lg p-1`}
    onClick={action}
  >
    <BiEdit size='1.2em' />
  </button>
);
