import { Outlet, useParams } from 'react-router-dom';
import { Information, Navbar, Photos } from './components';
import { ProductContextProvider } from './context/ProductProvider';

const ProductPage = () => {
  const { id } = useParams();
  console.log(Math.random());

  return (
    <ProductContextProvider productId={Number(id)}>
      <div className='flex flex-col items-center gap-4 w-full'>
        <section className='w-full max-w-5xl bg-custom-medium grid grid-cols-5 max-md:grid-cols-1 justify-items-center gap-1 p-1 rounded-md'>
          <>{console.log('Information Component', Math.random())}</>
          <Information />
          <Photos />
        </section>
        <section className='w-full max-w-5xl flex flex-col px-1'>
          <Navbar />
          <Outlet />
        </section>
      </div>
    </ProductContextProvider>
  );
};

export default ProductPage;
