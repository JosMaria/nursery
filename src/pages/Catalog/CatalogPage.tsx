import { Products } from './components';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchPaginatedProducts } from './service/catalogService';
import { useState } from 'react';
import { SkeletonProducts } from './skeletons';

const VALUE_ALL_CLASSIFICATION = 'ALL';
export type AllClassificationType = typeof VALUE_ALL_CLASSIFICATION;

// const classificationTyped = (value: string): PlantClassificationType | AllClassificationType => {
//   const valueSelected = value as PlantClassificationType;
//   return CLASSIFICATIONS.includes(valueSelected) ? valueSelected : 'ALL';
// };

const CatalogPage = () => {
  const [page, setPage] = useState(0);

  const {
    data: pageContent,
    status,
    fetchStatus,
    isPlaceholderData,
  } = useQuery({
    queryKey: ['products', page],
    queryFn: () => fetchPaginatedProducts(page),
    placeholderData: keepPreviousData,
  });

  console.log('Catalog render', pageContent);

  if (status === 'error') return <p>status error</p>;
  // if (status === 'pending') return <p>status pending</p>;
  // if (fetchStatus === 'fetching') return 'catalog fetching';
  // if (fetchStatus === 'paused') return 'catalog paused';

  return (
    <section className='w-full min-h-full'>
      <article className='flex flex-col justify-between h-full items-center px-0.5 gap-2'>
        <h1 className='h1-custom'>C&aacute;talogo de plantas</h1>

        {fetchStatus === 'fetching' ? (
          <SkeletonProducts />
        ) : fetchStatus === 'paused' ? (
          <p>fetch status paused</p>
        ) : status === 'pending' ? (
          <SkeletonProducts />
        ) : (
          <Products
            classificationSelected={'ALL'}
            isEmpty={pageContent.content.length === 0}
            products={pageContent.content}
          />
        )}

        <article className='max-xs:overflow-x-scroll w-full flex justify-center gap-3'>
          <button
            className={`button-custom ${pageContent?.first && 'invisible'}`}
            onClick={() => setPage((prev) => prev - 1)}
            disabled={pageContent?.first}
          >
            Anterior
          </button>
          <button
            className={`button-custom ${(isPlaceholderData || pageContent?.last) && 'invisible'}`}
            onClick={() => {
              if (!isPlaceholderData && !pageContent?.last) {
                setPage((prev) => prev + 1);
              }
            }}
            disabled={isPlaceholderData || pageContent?.last}
          >
            Siguiente
          </button>
        </article>
      </article>
    </section>
  );
};

export default CatalogPage;

/**
 * const [searchParams, setSearchParams] = useSearchParams({ q: VALUE_ALL_CLASSIFICATION });
  const queryClient = useQueryClient();

  const classificationSelected = searchParams.get('q') ?? VALUE_ALL_CLASSIFICATION;

 * 
  const changeClassificationFilter = (value: string) => {
    setSearchParams((prev) => {
      prev.set('q', classificationTyped(value));
      return prev;
    });
    console.log(value);
    queryClient.invalidateQueries({ queryKey: ['products'] });
  };

  console.log('Catalog Page', Math.random());
  console.log('Classification value:', searchParams.get('q'));

  const fetchContent: JSX.Element =
    fetchStatus === 'fetching' ? (
      <p>Fetch Status fething...</p>
    ) : fetchStatus === 'paused' ? (
      <p>Fetch Status paused</p>
    ) : (
      <></>
    );
 */
