import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Table, FormCreateFamily } from './components';
import { createFamilies, fetchAllFamilies } from './service';
import { Spinner } from '../../components';

const CreateFamilyPage = () => {
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
    <section className='bg-skin-form flex flex-col items-center gap-3 py-5 w-1/3 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full'>
      <FormCreateFamily createFamilies={createFamiliesMutation} />
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <p className='text-sm'>Error al obtener familias</p>
      ) : (
        <Table families={families} />
      )}
    </section>
  );
};

export default CreateFamilyPage;
