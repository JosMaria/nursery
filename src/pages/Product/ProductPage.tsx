import { Outlet, useParams } from 'react-router-dom';
import { Information, Navbar, Photos } from './components';
import { ProductContextProvider } from './context/providers/ProductProvider';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <ProductContextProvider productId={Number(id)}>
      <div className='flex flex-col items-center gap-4 w-full max-w-5xl'>
        <section className='w-full bg-custom-medium flex max-md:flex-wrap justify-evenly items-center px-5 max-lg:px-3 max-sm:px-1'>
          <Information />
          <Photos />
        </section>
        <section className='w-full flex flex-col'>
          <Navbar />
          <Outlet />
        </section>
      </div>
    </ProductContextProvider>
  );
};

export default ProductPage;
