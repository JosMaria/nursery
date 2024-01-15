import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFamilyEditStore } from '../zustand-store/familyEditStore';
import { deleteFamilyById } from '../services/service';
import toast from 'react-hot-toast';
import { AxiosErrorType } from '../../../types';

type Props = {
  isOpen: boolean;
  close: () => void;
};

export const DeleteFamilyModal = ({ isOpen, close }: Props) => {
  const { reset } = useFamilyEditStore();

  const valueToEditFamily = useFamilyEditStore((state) => ({
    id: state.familyId,
    name: state.familyName,
  }));

  const queryClient = useQueryClient();

  const { mutateAsync: deleteFamilyMutateAsync } = useMutation({
    mutationFn: (data: { id: number; name: string }) => deleteFamilyById(data.id),
    onSuccess: (_, payload) => {
      toast.success(`Familia: ${payload.name} eliminada.`, {
        className: 'successfully-alert-custom',
      });
      queryClient.invalidateQueries({ queryKey: ['families'] });
    },
    onError: (error: AxiosErrorType) => {
      const { response } = error;
      toast.error(response.data.reason, { className: 'error-alert-custom' });
    },
  });

  return (
    <dialog
      className='max-sm:text-sm h-screen w-full bg-black bg-opacity-40 backdrop-blur-sm inset-0 fixed'
      open={isOpen}
    >
      <div className='flex justify-center items-center h-full'>
        <div className='relative bg-custom-light border-custom-dark rounded border-4 max-sm:w-72 w-80 flex flex-col items-center gap-2 max-sm:pt-3.5 pt-4 max-sm:p-1.5 p-2'>
          <button
            type='button'
            onClick={() => {
              close();
              reset();
            }}
            className='absolute flex justify-center items-center leading-none text-lg border rounded max-sm:px-1 px-1.5 right-0 top-0 text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'
          >
            &times;
          </button>
          <h3 className='text-center'>
            Seguro que quiere eliminar la familia:{' '}
            <span className='font-medium'>{valueToEditFamily.name}</span>
          </h3>
          <button
            className='button-custom'
            onClick={() => {
              deleteFamilyMutateAsync(valueToEditFamily);
              reset();
              close();
            }}
          >
            Si, Eliminar
          </button>
        </div>
      </div>
    </dialog>
  );
};
