import { useQuery } from '@tanstack/react-query';
import { fetchPaginatedProducts } from './service';
import SkeletonCatalogPage from './SkeletonCatalogPage';
import { ProductList } from './components';

const CatalogPage = () => {
  const { data: page, status } = useQuery({
    queryFn: fetchPaginatedProducts,
    queryKey: ['products'],
  });

  if (status === 'loading') return <SkeletonCatalogPage />;
  if (status === 'error')
    return (
      <p>
        Se obtuvo un error al cargar los productos, Una opcion es la conexion a
        Internet
      </p>
    );

  return (
    <>
      <ProductList products={page.content} />
    </>
  );
};

export default CatalogPage;
