import { Products } from './components';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchPaginatedProducts } from './service/catalogService';
import { SkeletonProducts } from './skeletons';
import { useSearchParams } from 'react-router-dom';
import { MdFirstPage, MdLastPage } from 'react-icons/md';
import { PlantClassificationType } from '../../types';
import { traduceClassification } from '../../utils';

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
            <article className='self-start flex items-baseline gap-3 bg-custom-medium p-2 max-sm:p-1 h-fit rounded-md'>
              <label htmlFor='classifications' className='font-medium max-sm:text-sm'>
                Filtrar por
              </label>
              <select
                className='input-custom w-44 border-custom-dark border'
                name='classifications'
                id='classifications'
                value={classificationSelected ?? 'ALL'}
                onChange={(e) => {
                  setSearchParams((prev) => {
                    prev.set('q', classificationTyped(e.currentTarget.value));
                    prev.set('page', '0');
                    return prev;
                  });
                }}
              >
                <option value=''>Sin Filtro</option>
                {CLASSIFICATIONS.map((classification, index) => (
                  <option key={index} value={classification}>
                    {traduceClassification(classification)}
                  </option>
                ))}
              </select>
            </article>
            <Products
              classificationSelected={'ALL'}
              isEmpty={pageContent.content.length === 0}
              products={pageContent.content}
            />
            <article className='max-xs:overflow-x-scroll w-full flex justify-center gap-1 sm:gap-3'>
              <button
                className={`button-custom px-2 ${pageContent.first && 'invisible'}`}
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set('page', String(0));
                    return prev;
                  })
                }
                disabled={pageContent.first}
              >
                <MdFirstPage size='1.4em' />
              </button>
              <button
                className={`button-custom ${pageContent.first && 'invisible'}`}
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set('page', String(pageNumber - 1));
                    return prev;
                  })
                }
                disabled={pageContent.first}
              >
                Anterior
              </button>
              <button
                className={`button-custom ${
                  (isPlaceholderData || pageContent.last) && 'invisible'
                }`}
                onClick={() => {
                  if (!isPlaceholderData && !pageContent.last) {
                    setSearchParams((prev) => {
                      prev.set('page', String(pageNumber + 1));
                      return prev;
                    });
                  }
                }}
                disabled={isPlaceholderData || pageContent.last}
              >
                Siguiente
              </button>
              <button
                className={`button-custom px-2 ${
                  (isPlaceholderData || pageContent.last) && 'invisible'
                }`}
                onClick={() =>
                  setSearchParams((prev) => {
                    prev.set('page', String(pageContent.totalPages - 1));
                    return prev;
                  })
                }
                disabled={isPlaceholderData || pageContent.last}
              >
                <MdLastPage size='1.4em' />
              </button>
            </article>
          </>
        )}
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

 */
