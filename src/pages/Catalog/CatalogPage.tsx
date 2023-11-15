import { useQuery } from '@tanstack/react-query';
import { fetchPaginatedProducts } from './service';
import { PlantCard } from './components';
import ImageEmptyPage from '../../assets/catalog-empty.png';

const CatalogPage = () => {
  const { data: page, status } = useQuery({
    queryFn: fetchPaginatedProducts,
    queryKey: ['products'],
  });

  if (status === 'loading') return <p>Cargando</p>;
  if (status === 'error') return <p>Error de en el catalogo</p>;

  return (
    <section className='h-full flex flex-col items-center justify-center gap-3 lg:gap-4'>
      {page.content.length === 0 ? (
        <article className='w-full flex justify-center items-center'>
          <figure className='flex flex-col items-center max-w-xs'>
            <img src={ImageEmptyPage} alt='Empty Catalog' className='w-36 p-3' />
            <figcaption className='font-medium'>Catalogo Vac&iacute;o</figcaption>
            <p className='text-sm max-sm:text-xs text-center font-light'>
              Lo sentimos, actualmente no tenemos productos en nuestro catálogo. Por favor, regresa
              más tarde.
            </p>
          </figure>
        </article>
      ) : (
        <>
          <h1 className='h1-custom'>Catalogo de plantas</h1>
          <article className='flex flex-wrap justify-evenly gap-2 sm:gap-3 md:gap-5 xl:gap-10 2xl:gap-16'>
            {page.content.map((product) => (
              <PlantCard
                key={product.id}
                content={{
                  id: product.id,
                  commonName: product.commonName,
                  scientificName: product.scientificName ?? '',
                  scientistLastnameInitial: product.scientistLastnameInitial ?? '',
                  family: product.family ?? '',
                  status: product.status,
                }}
              />
            ))}
          </article>
        </>
      )}
    </section>
  );
};

export default CatalogPage;
