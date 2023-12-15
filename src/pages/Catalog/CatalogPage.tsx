import {
  ClassificationsFilter,
  FirstPageButton,
  LastPageButton,
  NextPageButton,
  PreviousPageButton,
  Products,
} from './components';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchPaginatedProducts } from './service/catalogService';
import { SkeletonProducts } from './skeletons';
import { useSearchParams } from 'react-router-dom';
import { PlantClassificationType } from '../../types';

const CLASSIFICATIONS: PlantClassificationType[] = [
  'ALIMENTARY',
  'CACTUS',
  'EXOTIC',
  'FOREST',
  'FRUITFUL',
  'GRASS',
  'INDUSTRIAL',
  'MEDICINAL',
  'ORNAMENTAL',
  'SUCCULENT',
];

const VALUE_ALL_CLASSIFICATION = 'ALL';
export type AllClassificationType = typeof VALUE_ALL_CLASSIFICATION;

const classificationTyped = (value: string): PlantClassificationType | AllClassificationType => {
  const valueSelected = value as PlantClassificationType;
  return CLASSIFICATIONS.includes(valueSelected) ? valueSelected : 'ALL';
};

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    q: VALUE_ALL_CLASSIFICATION,
    page: '0',
  });
  const pageNumber: number = Number(searchParams.get('page') ?? 0);
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

  console.log('Catalog render', pageContent);

  if (status === 'error') return <p>status error</p>;

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
    if (!isPlaceholderData && !pageContent?.last) {
      setSearchParams(
        (prev) => {
          prev.set('page', String(pageNumber + 1));
          return prev;
        },
        { replace: true }
      );
    }
  };

  const moveToLastPage = () => {
    setSearchParams(
      (prev) => {
        prev.set('page', String(pageContent && pageContent.totalPages - 1));
        return prev;
      },
      { replace: true, relative: 'path' }
    );
  };

  const changeClassificationFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams((prev) => {
      prev.set('q', classificationTyped(e.currentTarget.value));
      prev.set('page', '0');
      return prev;
    });
  };

  return (
    <section className='w-full min-h-full px-0.5'>
      <article className='flex flex-col justify-between h-full items-center gap-2'>
        <h1 className='h1-custom'>C&aacute;talogo de plantas</h1>

        {fetchStatus === 'fetching' ? (
          <SkeletonProducts />
        ) : fetchStatus === 'paused' ? (
          <p>fetch status paused</p>
        ) : status === 'pending' ? (
          <SkeletonProducts />
        ) : (
          <>
            <ClassificationsFilter
              classificationSelected={classificationSelected}
              changeClassification={changeClassificationFilter}
            />
            <Products
              classificationSelected={'ALL'}
              isEmpty={pageContent.content.length === 0}
              products={pageContent.content}
            />
            <article className='max-xs:overflow-x-scroll w-full flex justify-center gap-1 sm:gap-3'>
              <FirstPageButton moveToFirstPage={moveToFirstPage} isDisabled={pageContent.first} />
              <PreviousPageButton
                moveToPreviousPage={moveToPreviousPage}
                isDisabled={pageContent.first}
              />
              <NextPageButton
                moveToNextPage={moveToNextPage}
                isDisabled={isPlaceholderData || pageContent.last}
              />
              <LastPageButton
                moveToLastPage={moveToLastPage}
                isDisabled={isPlaceholderData || pageContent.last}
              />
            </article>
          </>
        )}
      </article>
    </section>
  );
};

export default CatalogPage;
