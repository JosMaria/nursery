import { Link, Outlet } from 'react-router-dom';
import { Information, Navbar, Photos } from './components';
import { ProductContextProvider } from './context/providers/ProductProvider';

const ProductPage = () => (
  <ProductContextProvider>
    <div className='flex flex-col items-center gap-4 w-full max-w-5xl px-1'>
      <section className='w-full bg-custom-medium flex max-md:flex-wrap justify-evenly items-center px-5 max-lg:px-3 max-sm:px-1'>
        <Information />
        <Photos />
      </section>
      <section className='w-full flex flex-col'>
        <Navbar />
        <Outlet />
      </section>
      <Link className='button-custom self-start flex gap-2' to='..' relative='route'>
        <span className='font-semibold'>&#10229;</span>Volver
      </Link>
    </div>
  </ProductContextProvider>
);

export default ProductPage;
