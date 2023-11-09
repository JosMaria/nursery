import { Link } from 'react-router-dom';

const PlantNotFoundPage = () => (
  <section className='grid place-content-center'>
    <article className='flex flex-col items-center justify-center gap-5 h-screen max-w-lg'>
      <h1 className='font-semibold text-4xl max-md:text-3xl max-xs:text-2xl font-serif'>
        🪴 404 - Pagina no encontrada
      </h1>
      <p className='text-center max-md:text-sm max-xs:text-xs'>
        La p&aacute;gina que se esta observando probablemente haya sido eliminado, cambio de ruta o
        temporalmente esta indisponible
      </p>
      <Link to='..' className='button-custom' relative='route'>
        Ir al listado
      </Link>
    </article>
  </section>
);

export default PlantNotFoundPage;
