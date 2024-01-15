import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchPlantById } from './services/service';
import { IoIosArrowDown } from 'react-icons/io';
import { translateStatus } from '../../../utils';

const PlantSettingPage = () => {
  const { id } = useParams();

  const {
    data: plant,
    status,
    fetchStatus,
  } = useQuery({ queryKey: ['plant', id], queryFn: () => fetchPlantById(Number(id)) });

  if (fetchStatus === 'fetching') return <p>fetch status fetching</p>;
  if (fetchStatus === 'paused') return <p>fetch status paused</p>;
  if (status === 'pending') return <p>status pending</p>;
  if (status === 'error') return <p>status error</p>;

  return (
    <section className='self-center flex flex-col justify-center items-center max-w-2xl'>
      <h1 className='h1-custom'>Configuracion de la Planta</h1>
      <article className='w-full flex flex-col items-start justify-start'>
        <details className='border-2 border-custom-dark w-full rounded m-5' open={true}>
          <summary className='button-custom flex w-full justify-between items-center rounded-none px-3'>
            <p className='font-medium text-xl'>Details</p>
            <IoIosArrowDown size='1.3em' className='-rotate-90' />
          </summary>
          <div className='bg-custom-medium p-2'>
            <p>
              <span className='font-medium'>Nombre Com&uacute;n:</span> {plant.commonName}
            </p>
            <p>
              <span className='font-medium'>Nombre Cientifico:</span> {plant.scientificName}{' '}
              {plant.scientistLastnameInitial}
            </p>
            <p>
              <span className='font-medium'>Familia:</span> {plant.family}
            </p>
            <p>
              <span className='font-medium'>Estado:</span> {translateStatus(plant.status)}
            </p>
            <div className='flex gap-2'>
              <p className='font-medium'>Clasificaciones:</p>
              <ul>
                {plant.classifications.map((classification, index) => (
                  <li key={index}>{classification}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </article>
    </section>
  );
};

export default PlantSettingPage;
