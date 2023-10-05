import { CreateForm } from '../../components';

const CreateView = () => (
  <article className='bg-skin-form w-full flex flex-col items-center gap-5 p-4'>
    <h1 className='font-medium text-2xl'>Crear Planta</h1>
    <CreateForm />
  </article>
);

export default CreateView;
