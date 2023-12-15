import { MdLastPage } from 'react-icons/md';

type Props = {
  moveToLastPage: () => void;
  isDisabled: boolean;
};

export const LastPageButton = ({ moveToLastPage, isDisabled }: Props) => (
  <button
    className={`button-custom px-2 ${isDisabled && 'invisible'}`}
    onClick={moveToLastPage}
    disabled={isDisabled}
  >
    <MdLastPage size='1.4em' />
  </button>
);
