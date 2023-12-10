import { ProductContext } from '../ProductContext';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchProductByID } from '../../services/productService';

type ProductContextProviderProps = {
  children: JSX.Element;
};

export const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
  const { id: productId } = useParams();

  const {
    data: product,
    status,
    fetchStatus,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductByID(Number(productId)),
  });

  if (fetchStatus === 'fetching') return <p>Fetch Status fething...</p>;
  if (fetchStatus === 'paused') return <p>Fetch Status paused</p>;

  if (status === 'pending') return <p>Status pending product</p>;
  if (status === 'error') return <p>Status error product</p>;

  return <ProductContext.Provider value={{ product }}>{children}</ProductContext.Provider>;
};
