import { PlantCard } from './components';
import { CatalogContextProvider } from './context/providers/CatalogProvider';
import { useCatalogContext } from './context/CatalogContext';
import CatalogEmptyImage from '../../assets/catalog-empty.png';

const CatalogPage = () => {
  console.log('Catalog Page', Math.random());
  return (
    <CatalogContextProvider>
      <CatalogContent />
    </CatalogContextProvider>
  );
};

export default CatalogPage;

const CatalogContent = () => {
  const { catalog } = useCatalogContext();

  return (
    <section className='w-full min-h-full'>
      {catalog.content.length === 0 ? (
        <EmptyContent />
      ) : (
        <div className='flex flex-col justify-evenly items-center'>
          <h1 className='h1-custom'>C&aacute;talogo de plantas</h1>
          <article className='w-full flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 xl:gap-10 2xl:gap-16'>
            {catalog.content.map((product) => (
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
        </div>
      )}
    </section>
  );
};

const EmptyContent = () => (
  <article className='h-full flex justify-center items-center'>
    <figure className='flex flex-col items-center max-w-xs'>
      <img src={CatalogEmptyImage} alt='Empty Catalog' className='w-36 p-3' />
      <figcaption className='font-medium'>C&aacute;talogo Vac&iacute;o</figcaption>
      <p className='text-sm max-sm:text-xs text-center font-light'>
        Lo sentimos, actualmente no tenemos productos en nuestro cat&aacute;logo. Por favor, regresa
        m&aacute;s tarde.
      </p>
    </figure>
  </article>
);
