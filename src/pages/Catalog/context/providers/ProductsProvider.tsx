import { VALUE_ALL_CLASSIFICATION } from '../../constants/classifications';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchPaginatedProducts } from '../../service/catalogService';
import { classificationTyped } from '../../utils/classificationTyped';
import { ProductsContext } from '../ProductsContext';
import { useSearchParams } from 'react-router-dom';
import { SkeletonProducts } from '../../skeletons';

type Props = {
  children: JSX.Element;
};

export const ProductsContextProvider = ({ children }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams({
    q: VALUE_ALL_CLASSIFICATION,
    page: '0',
  });
  const pageNumber = Number(searchParams.get('page') ?? 0);
  const classificationSelected = classificationTyped(searchParams.get('q') ?? 'ALL');

  const {
    data: pageContent,
    status,
    fetchStatus,
    isPlaceholderData,
  } = useQuery({
    queryKey: ['products', pageNumber, 'classification', classificationSelected],
    queryFn: () => fetchPaginatedProducts(pageNumber, classificationSelected),
    placeholderData: keepPreviousData,
  });

  if (fetchStatus === 'fetching') return <SkeletonProducts />;
  if (fetchStatus === 'paused') return <p>fetch status paused</p>;
  if (status === 'pending') return <SkeletonProducts />;
  if (status === 'error') return <p>content status error</p>;

  const moveToFirstPage = () => {
    setSearchParams((prev) => {
      prev.set('page', String(0));
      return prev;
    });
  };

  const moveToPreviousPage = () => {
    setSearchParams((prev) => {
      prev.set('page', String(pageNumber - 1));
      return prev;
    });
  };

  const moveToNextPage = () => {
    if (!isPlaceholderData && !pageContent.last) {
      setSearchParams((prev) => {
        prev.set('page', String(pageNumber + 1));
        return prev;
      });
    }
  };

  const moveToLastPage = () => {
    setSearchParams((prev) => {
      prev.set('page', String(pageContent && pageContent.totalPages - 1));
      return prev;
    });
  };

  const changeClassificationFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams((prev) => {
      prev.set('q', classificationTyped(e.currentTarget.value));
      prev.set('page', '0');
      return prev;
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        content: pageContent,
        classificationSelected,
        actions: {
          firstPage: {
            move: moveToFirstPage,
            isDisabled: pageContent.first,
          },
          previousPage: {
            move: moveToPreviousPage,
            isDisabled: pageContent.first,
          },
          nextPage: {
            move: moveToNextPage,
            isDisabled: isPlaceholderData || pageContent.last,
          },
          lastPage: {
            move: moveToLastPage,
            isDisabled: isPlaceholderData || pageContent.last,
          },
          changeClassification: changeClassificationFilter,
        },
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
