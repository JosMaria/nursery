import { ProductResponse } from '../types';
import { Product } from '.';

interface Props {
  products: ProductResponse[];
}

export const ProductList = ({ products }: Props) => (
  <section className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 place-items-center gap-2 xs:gap-3 sm:gap-5 lg:gap-10 w-full py-5'>
    {products.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        commonName={product.commonName}
        scientificName={product.scientificName}
        scientistLastnameInitial={product.scientistLastnameInitial}
        family={product.family}
        status={product.status}
      />
    ))}
  </section>
);
