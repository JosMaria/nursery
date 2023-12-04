import { ClassificationsFilter, EmptyContent, PlantCard } from './components';
import { CatalogContextProvider } from './context/providers/CatalogProvider';
import { useCatalogProducts } from './hooks';

const CatalogPage = () => {
  console.log('Catalog Page', Math.random());
  return (
    <CatalogContextProvider>
      <CatalogContent />
    </CatalogContextProvider>
  );
};

const CatalogContent = () => {
  const { products, isEmpty } = useCatalogProducts();

  return (
    <section className='w-full min-h-full'>
      {isEmpty ? (
        <EmptyContent />
      ) : (
        <section className='flex flex-col justify-evenly items-center'>
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
      )}
    </section>
  );
};

export default CatalogPage;
