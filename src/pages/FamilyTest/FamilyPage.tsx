import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ContextType } from './context';
import { UpdateFamilyType } from './types';
import {
  fetchAllFamilies,
  deleteFamilyById,
  updateFamilyNameById,
} from './services';

const FamilyPage = () => {
  const queryClient = useQueryClient();

  const { data: families, status } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
  });

  const { mutateAsync: deleteFamilyMutation } = useMutation({
    mutationFn: deleteFamilyById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['families'] });
    },
  });

  const { mutateAsync: updateFamilyMutation } = useMutation({
    mutationFn: ({ id, payload }: UpdateFamilyType) => updateFamilyNameById(id, payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['families'] }),
  });

  if (status === 'loading') return 'loading families';
  if (status === 'error') return 'error families';

  const context: ContextType = {
    families,
    deleteFamilyByIdMutation: deleteFamilyMutation,
    updateFamilyMutation,
  };

  return (
    <section className='flex flex-col items-center max-w-lg w-full'>
      <Navbar />
      <Outlet context={context} />
    </section>
  );
};

export default FamilyPage;
