import { useCatalogProducts } from '../hooks';
import { EmptyContent, PlantCard } from '.';

export const Products = () => {
  const { isEmpty, products } = useCatalogProducts();

  return (
    <>
      {isEmpty ? (
        <EmptyContent />
      ) : (
        <article className='w-full grid max-md:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 justify-items-center max-md:gap-y-5 max-lg:gap-y-10 gap-y-16'>
          {products.map((product) => (
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
      )}
    </>
  );
};
