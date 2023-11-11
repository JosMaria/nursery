import { useQuery } from '@tanstack/react-query';
import { fetchPaginatedProducts } from './service';
import { ProductList } from './components';
import ImageEmptyPage from '../../assets/catalog-empty.png';

const CatalogPage = () => {
  const { data: page, status } = useQuery({
    queryFn: fetchPaginatedProducts,
    queryKey: ['products'],
  });

  if (status === 'loading') return <p>Cargando</p>;
  if (status === 'error') return <p>Error de en el catalogo</p>;

  return (
    <>
      {page.content.length === 0 ? (
        <section className='w-full flex justify-center items-center'>
          <figure className='flex flex-col items-center max-w-xs'>
            <img src={ImageEmptyPage} alt='Empty Catalog' className='w-36 p-3' />
            <figcaption className='font-medium'>Catalogo Vac&iacute;o</figcaption>
            <p className='text-sm max-sm:text-xs text-center font-light'>
              Lo sentimos, actualmente no tenemos productos en nuestro catálogo. Por favor, regresa
              más tarde.
            </p>
          </figure>
        </section>
      ) : (
        <ProductList products={page.content} />
      )}
    </>
  );
};

export default CatalogPage;
