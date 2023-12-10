// import { ClassificationsFilter, EmptyContent, PlantCard } from '.';
// import { PlantClassificationType } from '../../../types';
// import { useCatalogProducts, useClassificationFilter } from '../hooks';

import { useQuery } from '@tanstack/react-query';
import { fetchPaginatedProducts } from '../service/catalogService';
import { PlantClassificationType } from '../../../types';
import { AllClassificationType } from '../CatalogPage';
import { EmptyContent, PlantCard } from '.';
import { ProductResponse } from '../types/catalogTypes';

// const CLASSIFICATIONS: PlantClassificationType[] = [
//   'ALIMENTARY',
//   'CACTUS',
//   'EXOTIC',
//   'FOREST',
//   'FRUITFUL',
//   'GRASS',
//   'INDUSTRIAL',
//   'MEDICINAL',
//   'ORNAMENTAL',
//   'SUCCULENT',
// ];

// export const Products = () => {
//   const { products } = useCatalogProducts();
//   const { isEmpty } = useCatalogProducts();
//   const { classificationFilter } = useClassificationFilter();

//   if (!CLASSIFICATIONS.includes(classificationFilter)) {
//     return isEmpty ? (
//       <EmptyContent />
//     ) : (
//       <article className='w-full flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 xl:gap-10 2xl:gap-16'>
//         {products.map((product) => (
//           <PlantCard
//             key={product.id}
//             content={{
//               id: product.id,
//               commonName: product.commonName,
//               scientificName: product.scientificName ?? '',
//               scientistLastnameInitial: product.scientistLastnameInitial ?? '',
//               family: product.family ?? '',
//               status: product.status,
//             }}
//           />
//         ))}
//       </article>
//     );
//   } else {
//   }

//   return (
//     <section className='flex flex-col justify-evenly items-center px-2 gap-2'>
//       <h1 className='h1-custom'>C&aacute;talogo de plantas</h1>
//       <ClassificationsFilter />
//       {classificationFilter.length === 0}
//       <article className='w-full flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 xl:gap-10 2xl:gap-16'>
//         {products.map((product) => (
//           <PlantCard
//             key={product.id}
//             content={{
//               id: product.id,
//               commonName: product.commonName,
//               scientificName: product.scientificName ?? '',
//               scientistLastnameInitial: product.scientistLastnameInitial ?? '',
//               family: product.family ?? '',
//               status: product.status,
//             }}
//           />
//         ))}
//       </article>
//     </section>
//   );
// };

// export const Content = () => {
//   const { classificationFilter: classificationSelected } = useClassificationFilter();

//   return (
//     <section className='flex flex-col justify-evenly items-center px-2 gap-2'>
//       <h1 className='h1-custom'>C&aacute;talogo de plantas</h1>
//       <ClassificationsFilter />
//       <EmptyContent classificationSelected={classificationSelected} />
//     </section>
//   );
// };

interface Props {
  classificationSelected: PlantClassificationType | AllClassificationType;
  products: ProductResponse[];
  isEmpty: boolean;
}

export const Products = ({ classificationSelected, isEmpty, products }: Props) => {
  return (
    <>
      {isEmpty ? (
        <EmptyContent classificationSelected={classificationSelected} />
      ) : (
        <article className='w-full grid max-md:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 justify-items-center max-md:gap-y-5 max-lg:gap-y-10 gap-y-16'>
          {products.map((product) => (
            <PlantCard
              key={product.id}
              content={{
                id: product.id,
                commonName: product.commonName,
                scientificName: product.scientificName ?? '',
                scientistLastnameInitial: product.scientistLastnameInitial ?? '',
                family: product.family ?? '',
                status: product.status,
              }}
            />
          ))}
        </article>
      )}
    </>
  );
};
