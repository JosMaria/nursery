import { useNextPageAction } from '../../hooks/useActionsPagination';

export const NextPageButton = () => {
  const { moveToNextPage, isDisabled } = useNextPageAction();

  return (
    <button
      className={`button-custom ${isDisabled && 'invisible'}`}
      onClick={moveToNextPage}
      disabled={isDisabled}
    >
      Siguiente
    </button>
  );
};
