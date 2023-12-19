import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFamilyById } from '../services';
import { ErrorType } from '../../../types';
import toast from 'react-hot-toast';
import { HttpStatusCode } from 'axios';
import { CloseButton } from '.';

interface DeleteModalProps {
  familyId: number;
  familyName: string;
  close: () => void;
}

export const DeleteModal = ({ familyId, familyName, close }: DeleteModalProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteFamilyMutate } = useMutation({
    mutationFn: (data: { id: number; name: string }) => deleteFamilyById(data.id),
    onSuccess(_, variables) {
      toast.success(`Familia: ${variables.name} eliminada.`, { className: 'custom-toast-success' });
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
    <dialog className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl flex justify-center items-center select-none w-full h-screen text-skin-dark'>
      <div className=' bg-skin-light p-4 rounded flex flex-col justify-center items-center gap-3 relative w-80'>
        <CloseButton close={close} />
        <h3 className='text-center'>
          Seguro que quiere eliminar la familia: <span className='font-medium'>{familyName}</span>
        </h3>
        <button
          className='custom-btn-form'
          onClick={() => deleteFamilyMutate({ id: familyId, name: familyName })}
        >
          Eliminar
        </button>
      </div>
    </dialog>
  );
};
