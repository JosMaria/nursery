import { useQuery } from '@tanstack/react-query';
import { SkeletonCatalogPage, ProductList } from './components';
import { fetchPaginatedProducts } from './service';

export const Component = () => {
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

Component.displayName = 'CatalogPage';
