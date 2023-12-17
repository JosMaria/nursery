import { useLastPageAction } from '../../hooks/useActionsPagination';
import { MdLastPage } from 'react-icons/md';

export const LastPageButton = () => {
  const { moveToLastPage, isDisabled } = useLastPageAction();
  return (
    <button
      className={`button-custom px-2 ${isDisabled && 'invisible'}`}
      onClick={moveToLastPage}
      disabled={isDisabled}
    >
      <MdLastPage size='1.4em' />
    </button>
  );
};
