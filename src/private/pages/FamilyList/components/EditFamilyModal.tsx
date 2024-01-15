import { useFamilyEditStore } from '../zustand-store/familyEditStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateFamilyNameById } from '../services/service';
import { AxiosErrorType } from '../../../types';
import toast from 'react-hot-toast';
import { useState } from 'react';

type Props = {
  isOpen: boolean;
  close: () => void;
};

export const EditFamilyModal = ({ isOpen, close }: Props) => {
  const [newName, setNewName] = useState('');
  const queryClient = useQueryClient();
  const { reset } = useFamilyEditStore();
  const id = useFamilyEditStore((state) => state.familyId);
  const name = useFamilyEditStore((state) => state.familyName);

  const { mutateAsync: editFamilyMutateAsync } = useMutation({
    mutationFn: (data: { id: number; newName: string }) =>
      updateFamilyNameById(data.id, { family_name: data.newName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['families'] });
      toast.success(`Nombre de la familia actulizada.`, {
        className: 'successfully-alert-custom',
      });
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
        <div className='relative bg-custom-medium border-custom-dark rounded border-4 max-sm:w-72 w-80 flex flex-col items-center gap-2 max-sm:p-1.5 p-2'>
          <button
            className='absolute flex justify-center items-center leading-none text-lg border rounded max-sm:px-1 px-1.5 right-0 top-0 text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-red-500 focus:ring-1'
            onClick={() => {
              close();
              reset();
            }}
          >
            &times;
          </button>
          <h3 className='text-center mt-3 flex flex-col items-center'>
            <span>Cambiar el nombre de</span>
            <span className='font-medium'>'{name}'</span>
          </h3>

          <input
            className='input-custom'
            placeholder='Ingrese nuevo nombre'
            value={newName}
            onChange={(e) => {
              e.preventDefault();
              setNewName(e.target.value);
            }}
          />

          <button
            className='button-custom'
            disabled={newName.trim().length === 0}
            onClick={() => {
              editFamilyMutateAsync({ id, newName });
              reset();
              close();
              setNewName('');
            }}
          >
            Cambiar
          </button>
        </div>
      </div>
    </dialog>
  );
};
