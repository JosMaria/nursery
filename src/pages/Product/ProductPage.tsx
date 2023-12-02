import { Outlet, useParams } from 'react-router-dom';
import { Photos } from './components';

const ProductPage = () => {
  const params = useParams();
  console.log(params);
  console.log(Math.random());

  return (
    <div>
      <Photos />
      <Outlet />
    </div>
  );
};

export default ProductPage;
