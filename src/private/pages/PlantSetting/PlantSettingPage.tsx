import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchPlantById } from './services/service';
import { IoIosArrowDown } from 'react-icons/io';
import { translateStatus } from '../../../utils';
import { UploadFileInput } from './components';
import { useState } from 'react';

const urlImages: string[] = [
  'https://ornamentalis.com/wp-content/uploads/2015/01/Dahlia-hybrida.jpg',
  // 'https://www.revistapem.org/wp-content/uploads/2018/09/petunia-flor.jpg',
  // 'https://i0.wp.com/ornamentalis.com/wp-content/uploads/2019/07/plantas-ornamentales-nombres.jpg',
];

const PlantSettingPage = () => {
  const { id } = useParams();
  const [isDragging, setIsDragging] = useState(false);
  // const {
  //   data: plant,
  //   status,
  //   fetchStatus,
  // } = useQuery({ queryKey: ['plant', id], queryFn: () => fetchPlantById(Number(id)) });

  // if (fetchStatus === 'fetching') return <p>fetch status fetching</p>;
  // if (fetchStatus === 'paused') return <p>fetch status paused</p>;
  // if (status === 'pending') return <p>status pending</p>;
  // if (status === 'error') return <p>status error</p>;

  const onDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = 'copy';
    console.log('drag over');
  };

  const onDragLeave = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDragging(false);
    console.log('drag leave');
  };

  const onDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setIsDragging(false);
    console.log('on drop');
    // const files = event.dataTransfer.files;
    // addImages(files);
  };

  return (
    <section className='flex flex-col items-center'>
      <h1 className='h1-custom'>Configuracion de la Planta</h1>
      {/* <article className='w-full flex flex-col items-start justify-start'>
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

      <UploadFileInput /> */}

      <article className='w-full max-w-4xl'>
        <h2 className='text-lg font-medium'>Fotos actuales</h2>
        <div className='flex flex-wrap gap-5 bg-red-400 p-2'>
          {urlImages.map((url, index) => (
            <div className='w-60 h-fit' key={index}>
              <img src={url} alt='img-1' />
            </div>
          ))}
        </div>
        <h2 className='text-lg font-medium'>Agregue nuevas fotos</h2>

        <article
          className='w-full max-w-md h-44 bg-custom-medium border-4 border-dashed border-custom-dark select-none flex justify-center items-center'
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <span className='font-bold text-lg max-sm:text-base tracking-wider text-skin-dark p-3 text-center'>
            Arrastre y suelte las imagenes aqui o{' '}
            <button className='button-custom' onClick={() => console.log('asdsad')}>
              Elija una foto
            </button>
          </span>
        </article>
      </article>
    </section>
  );
};

export default PlantSettingPage;
