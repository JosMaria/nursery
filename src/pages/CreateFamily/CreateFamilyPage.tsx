import { Form } from './components';

const CreateFamilyPage = () => {
  return (
    <section className='bg-skin-form w-1/2 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full flex flex-col items-center gap-5 p-5'>
      <h1 className='text-xl font-medium tracking-wider'>Crear familias</h1>
      <Form />
    </section>
  );
};

export default CreateFamilyPage;
