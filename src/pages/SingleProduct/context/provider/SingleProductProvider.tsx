import { useQuery } from '@tanstack/react-query';
import { SingleProductContext } from '..';
import { fetchProductByID } from '../../services';
import SkeletonPlantPage from '../../SkeletonSingleProductPage';

type Props = {
  singleProductId: number;
  children: JSX.Element | JSX.Element[];
};

export const SingleProductProvider = ({ singleProductId, children }: Props) => {
  const { data: singleProduct, status } = useQuery({
    queryFn: () => fetchProductByID(singleProductId),
    queryKey: ['singleProduct', singleProductId],
  });

  if (status === 'loading') return <SkeletonPlantPage />;
  if (status === 'error') return <p>Status Error FetchSingleProduct with ID: {singleProductId}</p>;

  return (
    <SingleProductContext.Provider value={{ singleProduct }}>
      {children}
    </SingleProductContext.Provider>
  );
};
