import { Outlet, useParams } from 'react-router-dom';
import { Information, Photos } from './components';

const ProductPage = () => {
  const params = useParams();
  console.log(params);
  console.log(Math.random());

  return (
    <div className='w-full max-w-5xl'>
      <section className='bg-custom-medium grid grid-cols-5 max-md:grid-cols-1 justify-items-center gap-1 p-1 rounded-md'>
        <Information />
        <Photos />
      </section>

      <Outlet />
    </div>
  );
};

export default ProductPage;
