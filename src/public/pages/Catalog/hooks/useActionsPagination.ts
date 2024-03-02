import { useProductsContext } from '../context/ProductsContext';

export const useFirstPageAction = () => {
  const {
    actions: {
      firstPage: { move: moveToFirstPage, isDisabled },
    },
  } = useProductsContext();

  return { moveToFirstPage, isDisabled };
};

export const usePreviousPageAction = () => {
  const {
    actions: {
      previousPage: { move: moveToPreviousPage, isDisabled },
    },
  } = useProductsContext();

  return { moveToPreviousPage, isDisabled };
};

export const useNextPageAction = () => {
  const {
    actions: {
      nextPage: { move: moveToNextPage, isDisabled },
    },
  } = useProductsContext();

  return { moveToNextPage, isDisabled };
};

export const useLastPageAction = () => {
  const {
    actions: {
      lastPage: { move: moveToLastPage, isDisabled },
    },
  } = useProductsContext();

  return { moveToLastPage, isDisabled };
};
