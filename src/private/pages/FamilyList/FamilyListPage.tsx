import { Link } from 'react-router-dom';

const FamilyListPage = () => {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='h1-custom'>Listado familias</h2>
      <article className='bg-custom-medium max-w-sm w-full flex flex-col items-center gap-2 py-3'>
        <p className='font-medium text-center select-none'>No hay ninguna familia registrada</p>
        <Link className='button-custom' to='../create/family'>
          Crear Familia&nbsp;&nbsp;&#10230;
        </Link>
      </article>
    </section>
  );
};

export default FamilyListPage;
