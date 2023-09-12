import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { List, FormCreateFamily } from './components';
import { createFamilies, fetchAllFamilies } from './service';
import { Spinner } from '../../components';

const FamilyPage = () => {
  const queryClient = useQueryClient();

  const { data: families, status } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
  });

  const { mutateAsync: createFamiliesMutation } = useMutation({
    mutationFn: createFamilies,
    onSuccess: () => queryClient.invalidateQueries(['families']),
  });

  return (
    <section className='flex flex-wrap items-start justify-evenly gap-10'>
      <FormCreateFamily createFamilies={createFamiliesMutation} />
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <p className='text-sm'>Error al obtener familias</p>
      ) : (
        <List families={families} />
      )}
    </section>
  );
};

export default FamilyPage;
