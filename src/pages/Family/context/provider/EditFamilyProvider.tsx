import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EditFamilyContext } from '..';
import { updateFamilyNameById } from '../../service';
import { toast } from 'react-hot-toast';
import { ErrorType } from '../../../../types';
import { HttpStatusCode } from 'axios';

interface Props {
  children: JSX.Element | JSX.Element[];
  id: number;
  oldName: string;
}

// export const EditFamilyProvider = ({ children, id, oldName }: Props) => {
//   const queryClient = useQueryClient();

//   const { mutate: updateFamilyNameByIdMutate } = useMutation({
//     mutationFn: (data: { newName: string }) => updateFamilyNameById(id, { name: data.newName }),

//     onSuccess: (_, { newName }) => {
//       toast.success(`Familia ${oldName} actualizada a ${newName}.`, {
//         className: 'custom-toast-success',
//       });
//       queryClient.invalidateQueries({ queryKey: ['families'] });
//     },

//     onError(error: ErrorType) {
//       const { response } = error;
//       if (response.status === HttpStatusCode.BadRequest) {
//         toast.error(response.data.reason, { className: 'custom-toast-error' });
//       }
//     },
//   });

//   const handleUpdateFamily = (newName: string) => {
//     updateFamilyNameByIdMutate({ newName });
//   };

//   return <EditFamilyContext.Provider value={{updateFamily: handleUpdateFamily}}}>{children}</EditFamilyContext.Provider>;
// };
