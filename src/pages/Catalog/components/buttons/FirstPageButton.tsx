import { useFirstPageAction } from '../../hooks/useActionsPagination';
import { MdFirstPage } from 'react-icons/md';

export const FirstPageButton = () => {
  const { moveToFirstPage, isDisabled } = useFirstPageAction();

  return (
    <button
      className={`button-custom px-2 ${isDisabled && 'invisible'}`}
      onClick={moveToFirstPage}
      disabled={isDisabled}
    >
      <MdFirstPage size='1.4em' />
    </button>
  );
};
