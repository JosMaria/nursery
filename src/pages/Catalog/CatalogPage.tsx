import { useQuery } from '@tanstack/react-query';
import { Card } from './components';
import { fetchPaginatedProducts } from './services';

export const CatalogPage = () => {
  const { data: page } = useQuery({
    queryFn: fetchPaginatedProducts,
    queryKey: ['products'],
  });

  console.log(page);

  return (
    <>
      {page ? (
        <section className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 place-items-center gap-2 xs:gap-3 sm:gap-5 lg:gap-10 w-full py-5'>
          {page.content.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              commonName={product.commonName}
              scientificName={product.scientificName}
              scientistSurnameInitial={product.scientistSurnameInitial}
              family={product.family}
              status={product.status}
            />
          ))}
        </section>
      ) : (
        <p>error al cargar</p>
      )}
    </>
  );
};
