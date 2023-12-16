import { MdFirstPage } from 'react-icons/md';
import { useProductsContext } from '../../context/ProductsContext';

export const FirstPageButton = () => {
  const {
    actions: {
      firstPage: { move: moveToFirstPage, isDisabled },
    },
  } = useProductsContext();

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
