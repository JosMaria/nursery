import { ProductsContextProvider } from './context/providers/ProductsProvider';
import {
  ClassificationsFilter,
  FirstPageButton,
  LastPageButton,
  NextPageButton,
  PreviousPageButton,
  Products,
} from './components';

const CatalogPage = () => {
  console.log('catalog render', Math.random());
  return (
    <section className='w-full min-h-full px-0.5'>
      <article className='flex flex-col justify-between h-full items-center gap-2'>
        <h1 className='h1-custom'>C&aacute;talogo de plantas</h1>
        <ProductsContextProvider>
          <>
            <ClassificationsFilter />
            <Products />
            <article className='max-xs:overflow-x-scroll w-full flex justify-center gap-1 sm:gap-3'>
              <FirstPageButton />
              <PreviousPageButton />
              <NextPageButton />
              <LastPageButton />
            </article>
          </>
        </ProductsContextProvider>
      </article>
    </section>
  );
};

export default CatalogPage;
