import { PictureUploadType } from '../../../types';

type PictureSelectedContainerProps = {
  picture: PictureUploadType;
  changePicture: () => void;
};

export const PictureSelectedContainer = ({
  picture,
  changePicture,
}: PictureSelectedContainerProps) => (
  <article className='max-w-xs flex flex-col items-center gap-1'>
    <h1>
      Nombre: <span className='italic'>{picture.name}</span>
    </h1>
    <div className='border-4 border-dashed border-custom-dark p-1 bg-custom-medium'>
      <img src={picture.url} alt={picture.name} />
    </div>
    <div className='w-full flex justify-evenly'>
      <button className='button-custom' onClick={() => console.log('pictures', picture)}>
        Subir imagen
      </button>
      <button
        className='w-fit text-sm font-medium focus:ring-2 focus:ring-red-500 focus:border focus:border-red-100 focus:outline-none bg-red-500 hover:bg-red-600 text-red-50 max-xs:text-sm py-1 max-xs:py-1 px-6 max-xs:px-5 rounded select-none'
        onClick={changePicture}
      >
        Cancelar
      </button>
    </div>
  </article>
);
