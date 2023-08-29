import { useQuery } from '@tanstack/react-query';
import { SkeletonCatalog, ProductList } from './components';
import { fetchPaginatedProducts } from './service';

export const Component = () => {
  const { data: page, status } = useQuery({
    queryFn: fetchPaginatedProducts,
    queryKey: ['products'],
  });

  if (status === 'loading') return <SkeletonCatalog />;

  return (
    <>
      {status === 'success' ? (
        <ProductList products={page.content} />
      ) : (
        <p>
          Se obtuvo un error al cargar los productos, Una opcion es la conexion
          a Internet
        </p>
      )}
    </>
  );
};

Component.displayName = 'CatalogPage';
