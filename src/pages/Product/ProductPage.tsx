import { Outlet, useParams } from 'react-router-dom';

const ProductPage = () => {
  const params = useParams();
  console.log(params);
  console.log(Math.random());
  
  return (
    <div>
      pagina del producto: {params.id}
      <Outlet />
    </div>
  );
};

export default ProductPage;
