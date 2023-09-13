import { useQuery } from '@tanstack/react-query';
import {  FormCreateFamily } from './components';
import { fetchAllFamilies } from './service';
import { Spinner } from '../../components';

const FamilyPage = () => {
  

  const { data: families } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
    initialData: [],
    cacheTime: 3000
  });

  

  // const { mutateAsync: createFamiliesMutation } = useMutation({
  //   mutationFn: createFamilies,
  //   onSuccess: () => queryClient.invalidateQueries(['families']),
  // });

  /*
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
  */

  return (
    <article className='bg-skin-form rounded-xl flex flex-col items-center gap-5 w-80 text-sm p-2'>
      <h2 className='font-medium text-xl'>Listado familias</h2>
      <FormCreateFamily />
      {families.length === 0 ? (
        <p className='bg-skin-light font-medium text-center overflow-y-hidden px-3 text-lg select-none'>
          No hay ninguna familia registrada
        </p>
      ) : (
        <ul>
          {families.map((family) => (
            <ul key={family.id} className='py-1.5 px-3 flex justify-between items-center gap-2'>
              <p>{family.name}</p>
            </ul>
          ))}
        </ul>
      )}
    </article>
  );
};

export default FamilyPage;
