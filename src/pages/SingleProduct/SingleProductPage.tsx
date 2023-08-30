import { Link, Outlet, useParams } from 'react-router-dom';
import {
  InformationSection,
  NavbarProduct,
  PicturesSection,
} from './components';
import { useQuery } from '@tanstack/react-query';
import { fetchProductByID } from './service';
import { PlantContextProvider } from './PlantPageContext';
import { useChangePlant } from './hooks';

export const SingleProductPage = () => {
  const { id } = useParams();

  return (
    <PlantContextProvider>
      <PlantContentPage id={Number(id)}/>
    </PlantContextProvider>
  );
};

interface Props {
  id: number;
}

export const PlantContentPage = ({ id }: Props) => {
  const definePlant = useChangePlant();
  const { data: plant, status } = useQuery({
    queryFn: () => fetchProductByID(Number(id)),
    queryKey: ['plants', id],
  });  

  if (status === 'loading') return <p>cargando product: {id}</p>;
  if (status === 'error') return <p>Error al obtener el producto {id}</p>;
  if (status === 'success') {
    definePlant(plant);
  }

  return (
    <div className='w-full flex p-5 justify-center'>
      <div className='max-w-7xl w-full flex flex-col items-center gap-5'>
        {/* Top page - Container to image and information base */}
        <section className='flex flex-wrap-reverse justify-evenly gap-5 w-full'>
          <PicturesSection />
          <InformationSection />
        </section>
        {/* Middle page - Container to NavLinks and subpages */}
        <section className='w-full text-sm max-sm:text-xs'>
          <NavbarProduct />
          <article className='border-2 border-t-0 border-black p-2'>
            <Outlet />
          </article>
        </section>
        <Link
          to='..'
          relative='route'
          className='custom-btn-form w-fit flex gap-3 max-sm:text-xs self-start'
        >
          &#10229;<span>Volver</span>
        </Link>
      </div>
    </div>
  );
};
