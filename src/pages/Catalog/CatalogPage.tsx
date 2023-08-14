import { Card } from './components';
import { products } from './data/store';
import EmptyImage from '../../assets/no-image.png';

export const CatalogPage = () => {
  const styleColor =
    'bg-stone-50 border-stone-900 shadow-black shadow-sm hover:shadow-black hover:shadow-md p-1';
  return (
    <>
      <section className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 place-items-center gap-2 xs:gap-3 sm:gap-5 lg:gap-10 w-full py-5'>
        {products.map((product) => (
          // <Card
          //   key={product.id}
          //   id={product.id}
          //   commonName={product.commonName}
          //   scientificName={product.scientificName}
          //   scientistSurnameInitial={product.scientistSurnameInitial}
          //   family={product.family}
          //   status={product.status}
          // />
          <article
            key={product.id}
            className={`${styleColor} flex flex-col gap-1 w-80 max-xl:w-72 max-md:w-60 max-sm:w-48 max-xs:w-40 text-center rounded-b-lg`}
          >
            <div className='bg-orange-300'>
              <img
                src={EmptyImage}
                alt={product.commonName}
                className='w-full h-auto'
              />
            </div>

            <div className='h-20 flex flex-col justify-around max-sm:text-sm px-2 max-sm:px-0 '>
              <p className='font-medium max-sm:font-normal whitespace-nowrap overflow-x-auto overflow-y-hidden'>Agave Oride Agave Oride Agave</p>
              <div className='flex flex-col items-start justify-between text-sm max-sm:text-xs max-xs:text-xs leading-none h-fit overflow-x-auto overflow-y-hidden whitespace-nowrap'>
                <p className='leading-none'>
                  mammillaria asdnsadbn
                </p>
                <p className='leading-none'>cactaceae</p>
              </div>

              <p className='conservation-status self-end w-fit flex-nowrap'>
                EN CONSERVACION
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
