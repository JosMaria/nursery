import { useProductsContext } from '../../context/ProductsContext';

export const PreviousPageButton = () => {
  const {
    actions: {
      previousPage: { move: moveToPreviousPage, isDisabled },
    },
  } = useProductsContext();

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
