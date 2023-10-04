interface CloseButtonProps {
  action: () => void;
}
export const CloseButton = ({ action }: CloseButtonProps) => (
  <button
    className='cursor-pointer bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-red-400 text-white font-bold text-lg leading-3 p-1 rounded-md'
    type='button'
    onClick={action}
  >
    &times;
  </button>
);
