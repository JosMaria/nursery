import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateFamilyNameById } from '../service';
import { HttpStatusCode } from 'axios';
import { toast } from 'react-hot-toast';
import { ErrorType } from '../../../types';

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

export const EditModalTest = () => {
  const queryClient = useQueryClient();

  const { mutate: updateFamilyNameByIdMutate } = useMutation({
    mutationFn: () => updateFamilyNameById(1, {name: 'marcela'}),

    onSuccess: () => {
      toast.success(`Familia actualizada.`, {
        className: 'custom-toast-success',
      });
      queryClient.invalidateQueries({ queryKey: ['families'] });
    },

    onError(error: ErrorType) {
      const { response } = error;
      if (response.status === HttpStatusCode.BadRequest) {
        toast.error(response.data.reason, { className: 'custom-toast-error' });
      }
    },
  });

  return (
    <dialog id='edit-modal' className='modal backdrop-blur-sm cursor-auto'>
      <div className='bg-skin-form p-5 rounded shadow flex flex-col items-center gap-3 relative'>
        <h3 className='font-bold text-base'>Introduzca nuevo nombre</h3>
        <input type='text' className='custom-input-form' placeholder='value antiguo' />
        <form method='dialog'>
          <button className='custom-btn-form' onClick={() => updateFamilyNameByIdMutate()}>Cambiar</button>
          <button className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold text-xl leading-3 p-1 rounded'>
            &times;
          </button>
        </form>
      </div>
    </dialog>
  );
};


const DeleteFamilyModalTest = () => {
  return 
}

interface DeleteModalProps {
  familyId: number;
}

export const DeleteModal = ({ close }: Props & DeleteModalProps) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl flex justify-center items-center select-none'>
      <form
        className=' bg-skin-light py-4 px-6 rounded flex flex-col justify-center items-center gap-5 relative w-80'
        onSubmit={close}
      >
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
          <button type='submit' className='custom-btn-form'>
            Eliminar
          </button>
          <button type='button' className='custom-btn-form' onClick={close}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
