import { Outlet, useParams } from 'react-router-dom';
import { Information, Navbar, Photos } from './components';

const ProductPage = () => {
  const params = useParams();
  console.log(params);
  console.log(Math.random());

  return (
      <div className='flex flex-col items-center gap-4 w-full'>
        <section className='w-full max-w-5xl bg-custom-medium grid grid-cols-5 max-md:grid-cols-1 justify-items-center gap-1 p-1 rounded-md'>
          <Information />
          <Photos />
        </section>
        <section className='w-full max-w-5xl flex flex-col gap-1 px-1'>
          <Navbar />
          <Outlet />
        </section>
      </div>
  );
};

export default ProductPage;
