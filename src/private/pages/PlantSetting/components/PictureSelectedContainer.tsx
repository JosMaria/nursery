import { AxiosErrorType, PictureUploadType } from '../../../types';
import { useMutation } from '@tanstack/react-query';
import { uploadPicture } from '../services/service';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

type PictureSelectedContainerProps = {
  picture: PictureUploadType;
  changePicture: () => void;
  fileSelected?: File;
};

export const PictureSelectedContainer = ({
  picture,
  changePicture,
  fileSelected,
}: PictureSelectedContainerProps) => {
  const { id } = useParams();

  const { mutateAsync: uploadPictureMutateAsync } = useMutation({
    mutationFn: (input: { plantId: number; file: File }) =>
      uploadPicture(input.plantId, input.file),
    onSuccess: (response) => {
      toast.success(response, {
        className: 'successfully-alert-custom',
      });
    },
    onError: (error: AxiosErrorType) => {
      const { response } = error;
      toast.error(response.data.reason, { className: 'error-alert-custom' });
    },
  });

  if (!id) return <p>No se encontro las fotos de la planta con ID: {id}</p>;

  return (
    <article className='max-w-xs flex flex-col items-center gap-1'>
      <h1>
        Nombre: <span className='italic'>{picture.name}</span>
      </h1>
      <div className='border-4 border-dashed border-custom-dark p-1 bg-custom-medium'>
        <img src={picture.url} alt={picture.name} />
      </div>
      <div className='w-full flex justify-evenly'>
        <button
          className='button-custom'
          disabled={!fileSelected}
          onClick={() => {
            fileSelected && uploadPictureMutateAsync({ plantId: Number(id), file: fileSelected });
          }}
        >
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
};
