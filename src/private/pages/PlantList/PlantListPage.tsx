import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchAllPlants } from './service/service';
import { IconButton } from '../../components';
import { IoSettingsSharp } from 'react-icons/io5';
import { getButtonTheme } from '../../utils';

const PlantListPage = () => {
  const { data: plantNames, status } = useQuery({
    queryKey: ['plants-names'],
    queryFn: fetchAllPlants,
  });

  return (
    <section className='flex flex-col items-center'>
      <h2 className='h1-custom'>Listado Plantas</h2>
      {status === 'pending' && <p>Cargando plantas</p>}
      {status === 'pending' && <p>Un error al cargar los datos</p>}
      {status === 'success' && (
        <article className='bg-custom-medium max-w-sm w-full flex flex-col items-center gap-2 p-3'>
          {plantNames.length === 0 ? (
            <>
              <p className='font-medium text-center select-none'>
                No hay ninguna planta registrada
              </p>
              <Link className='button-custom' to='../create/plant'>
                Crear Planta&nbsp;&nbsp;&#10230;
              </Link>
            </>
          ) : (
            <ul className='flex flex-col gap-2 max-sm:gap-1 w-full max-sm:text-sm'>
              {plantNames.map((plantName) => (
                <li
                  key={plantName.id}
                  className='flex justify-between items-center bg-custom-light hover:bg-custom-medium px-3 py-1 max-sm:py-0.5 rounded-md'
                >
                  <div className='flex gap-3'>
                    <p>{plantName.id}</p>
                    <p>{plantName.commonName}</p>
                  </div>
                  <Link className={getButtonTheme('slate')} to={`../plant/${plantName.id}`}>
                    <IoSettingsSharp color='white' />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </article>
      )}
    </section>
  );
};

export default PlantListPage;
