import { CreatePlantForm } from '../components';

const CreatePlantView = () => (
  <article className='bg-skin-form w-full flex flex-col items-center gap-5 p-4'>
    <h1 className='font-medium text-xl max-sm:text-base select-none'>Crear Planta</h1>
    <CreatePlantForm />
  </article>
);

export default CreatePlantView;
