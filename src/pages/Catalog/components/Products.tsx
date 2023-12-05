import { ClassificationsFilter, PlantCard } from '.';
import { useCatalogProducts } from '../hooks';

export const Products = () => {
  const { products } = useCatalogProducts();

  return (
    <section className='flex flex-col justify-evenly items-center px-2 gap-2'>
      <h1 className='h1-custom'>C&aacute;talogo de plantas</h1>
      <ClassificationsFilter />
      <article className='w-full flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 xl:gap-10 2xl:gap-16'>
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
    </section>
  );
};
