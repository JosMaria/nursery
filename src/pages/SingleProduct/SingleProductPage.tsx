import { useParams } from 'react-router-dom';
import { SingleProductContent } from './content';
import { SingleProductProvider } from './context';

const SingleProductPage = () => {
  const { id } = useParams();

  return (
    <SingleProductProvider singleProductId={Number(id)}>
      <SingleProductContent />
    </SingleProductProvider>
  );
};

export default SingleProductPage;
