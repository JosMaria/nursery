interface CloseButtonProps {
  close: () => void;
}

export const CloseButton = ({ close }: CloseButtonProps) => (
  <button
    type='button'
    onClick={close}
    className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-400 text-white font-bold text-lg leading-none px-1 rounded'
  >
    &times;
  </button>
);
