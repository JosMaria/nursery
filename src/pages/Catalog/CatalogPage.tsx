import { EmptyContent, Products } from './components';
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

export default CatalogPage;

const CatalogContent = () => {
  const { isEmpty } = useCatalogProducts();

  return (
    <section className='w-full min-h-full'>{isEmpty ? <EmptyContent /> : <Products />}</section>
  );
};
