import { QueryClient, useMutation } from '@tanstack/react-query';
import { deleteFamilyByID } from '../service';
import { toast } from 'react-hot-toast';

interface Props {
  close: () => void;
}

export const EditModal = ({ close }: Props) => (
  <div className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl flex justify-center items-center select-none'>
    <div className=' bg-skin-light p-4 rounded flex flex-col justify-center items-center gap-5 relative'>
      <button
        className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold text-xl leading-3 p-1 rounded'
        onClick={close}
      >
        &times;
      </button>
      <h2 className='font-medium text-base'>Introduzca nuevo nombre</h2>
      <input type='text' className='custom-input-form' />
      <button className='custom-btn-form'>Cambiar Nombre</button>
    </div>
  </div>
);

interface DeleteModalProps {
  familyId: number;
}

export const DeleteModal = ({ close, familyId }: Props & DeleteModalProps) => {
  const queryClient = new QueryClient()

  const { mutateAsync } = useMutation({
    mutationFn: (id: number) => deleteFamilyByID(id),
    onSuccess: () => queryClient.invalidateQueries(['families']),
  });

  const handleDeleteFamily = (familyId: number) => {
    mutateAsync(familyId)
      .then(() => {
        toast.success('Familia eliminada', {
          className: 'custom-toast-success',
        });
        close();
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            toast.error(error.response.data.reason, {
              className: 'custom-toast-error',
            });
          }
        } else {
          throw new Error(error.message);
        }
      });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl flex justify-center items-center select-none'>
      <div className=' bg-skin-light py-4 px-6 rounded flex flex-col justify-center items-center gap-5 relative w-80'>
        <button
          className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold text-xl leading-3 p-1 rounded'
          onClick={close}
        >
          &times;
        </button>
        <h2 className='text-base text-center'>
          ¿ Seguro desea eliminar la familia <span className='font-medium'>apaficas</span> ?
        </h2>
        <div className='flex justify-evenly w-full'>
          <button className='custom-btn-form' onClick={() => handleDeleteFamily(familyId)}>
            Eliminar
          </button>
          <button className='custom-btn-form' onClick={close}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
