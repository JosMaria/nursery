import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <section className='flex flex-col items-center w-full text-center'>
    <p className='text-skin-dark max-sm:text-sm'>404 Error</p>
    <h1 className='text-4xl max-sm:text-3xl max-xs:text-2xl font-serif font-semibold'>
      P&aacute;gina no encontrada
    </h1>
    <p className='max-sm:text-sm max p-5'>
      Lo sentimos, la pagina que busca no fue encontrada o fue eliminada.
    </p>
    <Link to='' replace className='custom-btn-form'>
      Ir a usuarios
    </Link>
  </section>
);
