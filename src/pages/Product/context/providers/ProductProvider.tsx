import { useQuery } from '@tanstack/react-query';
import { ProductContext } from '../ProductContext';
import { fetchProductByID } from '../../services/productService';

type ProductContextProviderProps = {
  children: JSX.Element;
  productId: number;
};

export const ProductContextProvider = ({ children, productId }: ProductContextProviderProps) => {
  const {
    data: product,
    status,
    fetchStatus,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductByID(productId),
  });

  if (fetchStatus === 'fetching') return <p>Fetch Status fething...</p>;
  if (fetchStatus === 'paused') return <p>Fetch Status paused</p>;

  if (status === 'pending') return <p>Status pending product</p>;
  if (status === 'error') return <p>Status error product</p>;

  return <ProductContext.Provider value={{ product }}>{children}</ProductContext.Provider>;
};
