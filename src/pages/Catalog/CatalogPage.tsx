import { useSearchParams } from 'react-router-dom';
import { Products } from './components';
import { PlantClassificationType } from '../../types';
import { traduceClassification } from '../../utils';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPaginatedProducts } from './service/catalogService';
import { MdFirstPage, MdLastPage } from 'react-icons/md';
import { useState } from 'react';

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

// const classificationTyped = (value: string): PlantClassificationType | AllClassificationType => {
//   const valueSelected = value as PlantClassificationType;
//   return CLASSIFICATIONS.includes(valueSelected) ? valueSelected : 'ALL';
// };

const CatalogPage = () => {
  //const [pageNumber, setPageNumber] = useState(1);
  

  const query = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchPaginatedProducts(),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    
  });

  console.log(query);

  return (
    <section className='w-full min-h-full'>
      {/* <article className='flex flex-col justify-evenly items-center px-2 gap-2'>
        <h1 className='h1-custom'>C&aacute;talogo de plantas</h1>
        <article className='self-start flex items-baseline gap-3 bg-custom-medium p-2 max-sm:p-1 h-fit rounded-md'>
          <label htmlFor='classifications' className='font-medium max-sm:text-sm'>
            Filtrar por
          </label>
          <select
            className='input-custom w-44 border-custom-dark border'
            name='classifications'
            id='classifications'
            value={'ALL'}
            onChange={(e) => console.log(e.currentTarget.value)}
          >
            <option value={VALUE_ALL_CLASSIFICATION}>Sin Filtro</option>
            {CLASSIFICATIONS.map((classification, index) => (
              <option key={index} value={classification}>
                {traduceClassification(classification)}
              </option>
            ))}
          </select>
        </article>
        {fetchContent}
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
        <article className='max-xs:overflow-x-scroll w-full flex justify-center gap-3'>
          <button
            className='button-custom px-2'
            onClick={() => {
              setPageNumber((prev) => prev - 1);
              console.log('click button prev page');
            }}
            disabled={pageNumber === 0}
          >
            <MdFirstPage size='1.4em' />
          </button>
          <button className='button-custom'>Anterior</button>
          <button className='button-custom'>Siguiente</button>
          <button className='button-custom px-2'>
            <MdLastPage size='1.4em' />
          </button>
        </article>
      </article> */}
      <h1>hola njose maria</h1>
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
