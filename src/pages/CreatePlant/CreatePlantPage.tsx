import { useQuery } from '@tanstack/react-query';
import { FormCreatePlant } from './components';
import { fetchAllFamilies } from './service';
import { Spinner } from '../../components';

const CreatePlantPage = () => {
  const { data: families, status } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
  });

  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <p>Error al cargar las familias </p>;

  return (
    <section className='w-full bg-skin-light flex justify-center'>
      <article className='bg-skin-form w-fit flex flex-col items-center gap-5 p-5'>
        <h1 className='font-medium text-2xl'>Crear Planta</h1>
        <FormCreatePlant families={families} />
      </article>
    </section>
  );
};

export default CreatePlantPage;
