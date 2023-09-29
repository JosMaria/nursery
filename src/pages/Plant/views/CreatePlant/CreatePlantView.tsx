import { FormCreatePlant } from './components';

const CreatePlantView = () => {
  return (
    <article className='bg-skin-form w-fit flex flex-col items-center gap-5 p-5'>
      <h1 className='font-medium text-2xl'>Crear Planta</h1>
      <FormCreatePlant />
    </article>
  );
};

export default CreatePlantView;
