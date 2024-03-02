import { useState } from 'react';
import { PictureUploadType } from '../../../types';
import {
  DragAndDropPicture,
  Information,
  PictureSelectedContainer,
  PlantPictures,
} from '../components';

const urlImages: string[] = [
  'https://ornamentalis.com/wp-content/uploads/2015/01/Dahlia-hybrida.jpg',
  'https://www.revistapem.org/wp-content/uploads/2018/09/petunia-flor.jpg',
  'https://i0.wp.com/ornamentalis.com/wp-content/uploads/2019/07/plantas-ornamentales-nombres.jpg',
];

export const PicturesSection = () => {
  const [pictureSelected, setPictureSelected] = useState<PictureUploadType | null>(null);
  const [fileSelected, setFileSelected] = useState<File>();

  const changeFileSelected = (file: File) => {
    setFileSelected(file);
  };

  const changePictureSelected = (name: string, url: string) => {
    setPictureSelected({ name, url });
  };

  return (
    <details className='max-w-4xl w-full'>
      <summary className='bg-custom-dark text-custom-light py-1.5 px-3 font-medium cursor-pointer select-none active:bg-custom-dark-hover hover:bg-custom-dark-hover'>
        Fotos de la planta
      </summary>
      <article className='flex flex-col items-center gap-2 bg-custom-medium max-sm:p-1 p-2'>
        <Information />
        <PlantPictures urls={urlImages} />
        {pictureSelected ? (
          <PictureSelectedContainer
            picture={pictureSelected}
            removePictureSelected={() => setPictureSelected(null)}
            fileSelected={fileSelected}
          />
        ) : (
          <DragAndDropPicture
            changeFileSelected={changeFileSelected}
            changePictureSelected={changePictureSelected}
          />
        )}
      </article>
    </details>
  );
};
