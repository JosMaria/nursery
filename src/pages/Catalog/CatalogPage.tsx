import { useSearchParams } from 'react-router-dom';
import { PaginationSection, Products } from './components';
import { PlantClassificationType } from '../../types';
import { traduceClassification } from '../../utils';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPaginatedProducts } from './service/catalogService';
import { MdFirstPage, MdLastPage } from 'react-icons/md';
import { useState } from 'react';

const VALUE_ALL_CLASSIFICATION = 'ALL';
export type AllClassificationType = typeof VALUE_ALL_CLASSIFICATION;

// const classificationTyped = (value: string): PlantClassificationType | AllClassificationType => {
//   const valueSelected = value as PlantClassificationType;
//   return CLASSIFICATIONS.includes(valueSelected) ? valueSelected : 'ALL';
// };

const CatalogPage = () => {
  //const [pageNumber, setPageNumber] = useState(1);

  const {
    data: page,
    status,
    fetchStatus,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchPaginatedProducts(),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  console.log('Catalog render', page);

  if (fetchStatus === 'fetching') return 'fetchign catalog';
  if (fetchStatus === 'paused') return 'catalog paused';

  return (
    <section className='w-full min-h-full'>
      <article className='flex flex-col justify-evenly items-center px-0.5 gap-2'>
        <h1 className='h1-custom'>C&aacute;talogo de plantas</h1>
        {/* {fetchContent} */}
        {status === 'pending' ? (
          <p>Status pending product</p>
        ) : status === 'error' ? (
          <p>Status error product</p>
        ) : (
          <Products
            classificationSelected={'ALL'}
            isEmpty={page.content.length === 0}
            products={page.content}
          />
        )}
        <PaginationSection />
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
