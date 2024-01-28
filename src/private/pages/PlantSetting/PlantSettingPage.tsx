// import { useQuery } from '@tanstack/react-query';
// import { useParams } from 'react-router-dom';
// import { fetchPlantById } from './services/service';
// import { IoIosArrowDown } from 'react-icons/io';
// import { translateStatus } from '../../../utils';
import {
  DragAndDropImage,
  Information,
  PictureSelectedContainer,
  PlantPictures,
} from './components';
import { useRef, useState } from 'react';
import { PictureUploadType } from '../../types';

const urlImages: string[] = [
  'https://ornamentalis.com/wp-content/uploads/2015/01/Dahlia-hybrida.jpg',
  'https://www.revistapem.org/wp-content/uploads/2018/09/petunia-flor.jpg',
  'https://i0.wp.com/ornamentalis.com/wp-content/uploads/2019/07/plantas-ornamentales-nombres.jpg',
];

const PlantSettingPage = () => {
  //const { id } = useParams();
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [pictureSelected, setPictureSelected] = useState<PictureUploadType | null>(null);
  const [fileSelected, setFileSelected] = useState<File>();

  const changeFileSelected = (file: File) => {
    setFileSelected(file);
  };

  // const {
  //   data: plant,
  //   status,
  //   fetchStatus,
  // } = useQuery({ queryKey: ['plant', id], queryFn: () => fetchPlantById(Number(id)) });

  // if (fetchStatus === 'fetching') return <p>fetch status fetching</p>;
  // if (fetchStatus === 'paused') return <p>fetch status paused</p>;
  // if (status === 'pending') return <p>status pending</p>;
  // if (status === 'error') return <p>status error</p>;

  return (
    <section className='flex flex-col items-center max-w-4xl'>
      <h1 className='h1-custom'>Configuracion de la Planta</h1>
      <details className='w-full'>
        <summary className='bg-custom-dark text-custom-light p-1 font-medium cursor-pointer select-none active:bg-custom-dark-hover'>
          Fotos de la planta
        </summary>
        <article className='flex flex-col items-center gap-2 bg-custom-medium max-sm:p-1 p-2'>
          <Information />
          <PlantPictures urls={urlImages} />
          {pictureSelected ? (
            <PictureSelectedContainer
              picture={pictureSelected}
              changePicture={() => setPictureSelected(null)}
              fileSelected={fileSelected}
            />
          ) : (
            <DragAndDropImage
              isDragging={isDragging}
              fileInputRef={fileInputRef}
              setIsDragging={setIsDragging}
              changeFileSelected={changeFileSelected}
              setPictureSelected={setPictureSelected}
            />
          )}
        </article>
      </details>
    </section>
  );
};

export default PlantSettingPage;
