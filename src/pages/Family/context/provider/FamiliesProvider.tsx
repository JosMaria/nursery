import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FamiliesContext } from '..';
import { createFamilies, fetchAllFamilies } from '../../service';
import { toast } from 'react-hot-toast';
import { ErrorType } from '../../../../types';
import { HttpStatusCode } from 'axios';
import { CreateFamilyDTO } from '../../types';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const FamiliesProvider = ({ children }: Props) => {
  const queryClient = useQueryClient();

  const { data: families } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
    initialData: [],
  });

  const { mutate: createFamiliesMutate } = useMutation({
    mutationFn: (data: { families: CreateFamilyDTO[]; resetField: () => void }) =>
      createFamilies(data.families),

    onSuccess: (data, { resetField }) => {
      toast.success(
        data.length > 1 ? 'Familias guardadas exitosamente' : 'Familia guardada exitosamente',
        { className: 'custom-toast-success' }
      );
      queryClient.invalidateQueries({ queryKey: ['families'] });
      resetField();
    },

    onError(error: ErrorType) {
      const { response } = error;
      if (response.status === HttpStatusCode.BadRequest) {
        toast.error(response.data.reason, { className: 'custom-toast-error' });
      }
    },
  });

  return (
    <FamiliesContext.Provider
      value={{
        families: families,
        insertFamilies: (families: CreateFamilyDTO[], resetField: () => void) =>
          createFamiliesMutate({ families, resetField }),
      }}
    >
      {children}
    </FamiliesContext.Provider>
  );
};
