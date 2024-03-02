import { usePreviousPageAction } from '../../hooks/useActionsPagination';

export const PreviousPageButton = () => {
  const { moveToPreviousPage, isDisabled } = usePreviousPageAction();

  return (
    <button
      className={`button-custom ${isDisabled && 'invisible'}`}
      onClick={moveToPreviousPage}
      disabled={isDisabled}
    >
      Anterior
    </button>
  );
};
