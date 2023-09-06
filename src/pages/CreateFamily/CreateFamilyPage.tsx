import { BsTrashFill, BsPlus } from 'react-icons/bs';

const CreateFamilyPage = () => {
  return (
    <section className='bg-skin-form w-1/2 flex flex-col items-center gap-5 p-5'>
      <h1 className='text-xl font-medium tracking-wider'>Crear familias</h1>
      <form className='flex flex-col items-center gap-5'>
        <div className='flex gap-3 items-center'>
          <input type='text' className='custom-input-form' />
          <div className='bg-red-500 text-white p-2 w-fit rounded-md hover:bg-red-600 cursor-pointer'>
            <BsTrashFill />
          </div>
          <div className='custom-btn-form p-0.5 rounded-md'>
            <BsPlus size={'2em'} />
          </div>
        </div>
        <button type='submit' className='custom-btn-form'>
          Crear
        </button>
      </form>
    </section>
  );
};

export default CreateFamilyPage;
