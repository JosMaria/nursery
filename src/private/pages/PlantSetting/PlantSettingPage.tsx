import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchPlantById } from './services/service';
import { IoIosArrowDown } from 'react-icons/io';
import { translateStatus } from '../../../utils';
import { DragAndDropImage, PictureSelectedContainer, PlantPictures } from './components';
import { useRef, useState } from 'react';
import { PictureUploadType } from '../../types';

const urlImages: string[] = [
  'https://ornamentalis.com/wp-content/uploads/2015/01/Dahlia-hybrida.jpg',
  'https://www.revistapem.org/wp-content/uploads/2018/09/petunia-flor.jpg',
  'https://i0.wp.com/ornamentalis.com/wp-content/uploads/2019/07/plantas-ornamentales-nombres.jpg',
];

const PlantSettingPage = () => {
  const { id } = useParams();
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [pictureSelected, setPictureSelected] = useState<PictureUploadType | null>(null);

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
    const files = event.dataTransfer.files;
    if (files && files.length >= 0) {
      const file = files[0];
      if (file.type.split('/')[0] === 'image') {
        setPictureSelected({ name: file.name, url: URL.createObjectURL(file) });
      }
    }
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;

    if (files && files.length >= 0) {
      const file = files[0];
      if (file.type.split('/')[0] === 'image') {
        setPictureSelected({ name: file.name, url: URL.createObjectURL(file) });
      }
    }
  };

  return (
    <section className='flex flex-col items-center'>
      <h1 className='h1-custom'>Configuracion de la Planta</h1>

      <article className='w-full max-w-4xl flex flex-col items-center gap-2 bg-pink-300 p-2'>
        <PlantPictures urls={urlImages} />

        {pictureSelected ? (
          <PictureSelectedContainer
            picture={pictureSelected}
            changePicture={() => setPictureSelected(null)}
          />
        ) : (
          <DragAndDropImage
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            isDragging={isDragging}
            fileInputRef={fileInputRef}
            onFileSelect={onFileSelect}
          />
        )}
      </article>
    </section>
  );
};

export default PlantSettingPage;
