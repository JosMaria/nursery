import { MdLastPage } from 'react-icons/md';
import { useProductsContext } from '../../context/ProductsContext';

export const LastPageButton = () => {
  const {
    actions: {
      lastPage: { move: moveToLastPage, isDisabled },
    },
  } = useProductsContext();

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
