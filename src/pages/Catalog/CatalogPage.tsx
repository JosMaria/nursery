import { Card } from './components';
import { products } from './data/store';

export const CatalogPage = () => {
  return (
    <>
      <article className='flex flex-wrap justify-center gap-10 p-5'>
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            commonName={product.commonName}
            scientificName={product.scientificName}
            scientistSurnameInitial={product.scientistSurnameInitial}
            family={product.family}
            status={product.status}
          />
        ))}
      </article>
    </>
  );
};
