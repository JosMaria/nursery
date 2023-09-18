import { HttpStatusCode } from 'axios';
import { FamilyContext } from '..';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFamilyById, updateFamilyNameById } from '../../service';
import { toast } from 'react-hot-toast';
import { ErrorType } from '../../../../types';

interface Props {
  children: JSX.Element | JSX.Element[];
  id: number;
  name: string;
}

export const FamilyProvider = ({ children, id, name }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: deleteFamilyByIdMutate } = useMutation({
    mutationFn: (data: { id: number; name: string }) => deleteFamilyById(data.id),

    onSuccess: (_, variables) => {
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

  const { mutate: updateFamilyNameByIdMutate } = useMutation({
    mutationFn: (newName: string) => updateFamilyNameById(id, { name: newName }),

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
    <FamilyContext.Provider
      value={{
        name,
        deleteFamily: () => deleteFamilyByIdMutate({ id, name }),
        updateFamily: (newName: string) => updateFamilyNameByIdMutate(newName),
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};
