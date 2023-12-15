import { MdFirstPage } from 'react-icons/md';

type Props = {
  moveToFirstPage: () => void;
  isDisabled: boolean;
};

export const FirstPageButton = ({ moveToFirstPage, isDisabled }: Props) => (
  <button
    className={`button-custom px-2 ${isDisabled && 'invisible'}`}
    onClick={moveToFirstPage}
    disabled={isDisabled}
  >
    <MdFirstPage size='1.4em' />
  </button>
);
