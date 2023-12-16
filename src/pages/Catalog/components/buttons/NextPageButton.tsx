import { useProductsContext } from '../../context/ProductsContext';

export const NextPageButton = () => {
  const {
    actions: {
      nextPage: { move: moveToNextPage, isDisabled },
    },
  } = useProductsContext();

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
