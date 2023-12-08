import { useSearchParams } from 'react-router-dom';
import { Products } from './components';
import { PlantClassificationType } from '../../types';
import { traduceClassification } from '../../utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPaginatedProducts } from './service/catalogService';
import { MdFirstPage, MdLastPage } from 'react-icons/md';

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
  const [searchParams, setSearchParams] = useSearchParams({ q: VALUE_ALL_CLASSIFICATION });
  const queryClient = useQueryClient();

  const classificationSelected = searchParams.get('q') ?? VALUE_ALL_CLASSIFICATION;

  const {
    data: page,
    status,
    fetchStatus,
  } = useQuery({
    queryKey: ['products', classificationSelected],
    queryFn: ({ queryKey }) => fetchPaginatedProducts(classificationTyped(queryKey[1])),
  });

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

  return (
    <section className='w-full min-h-full'>
      <article className='flex flex-col justify-evenly items-center px-2 gap-2'>
        <h1 className='h1-custom'>C&aacute;talogo de plantas</h1>
        <article className='self-start flex items-baseline gap-3 bg-custom-medium p-2 max-sm:p-1 h-fit rounded-md'>
          <label htmlFor='classifications' className='font-medium max-sm:text-sm'>
            Filtrar por
          </label>
          <select
            className='input-custom w-44 border-custom-dark border'
            name='classifications'
            id='classifications'
            value={classificationSelected}
            onChange={(e) => changeClassificationFilter(e.currentTarget.value)}
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
            classificationSelected={classificationTyped(classificationSelected)}
            isEmpty={page.content.length === 0}
            products={page.content}
          />
        )}
        <article className='max-xs:overflow-x-scroll w-full flex justify-center gap-3'>
          <button className='button-custom px-2' disabled={true}>
            <MdFirstPage size='1.4em'/>
          </button>
          <button className='button-custom'>Anterior</button>
          <button className='button-custom'>Siguiente</button>
          <button className='button-custom px-2'>
            <MdLastPage size='1.4em' />
          </button>
        </article>
      </article>
    </section>
  );
};

export default CatalogPage;
