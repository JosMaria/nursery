import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const NotFound = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <section className='bg-skin-light h-screen w-full flex items-center justify-center'>
        <article className='flex flex-col items-center gap-10 max-md:gap-8 max-sm:gap-6 max-xs:gap-4 w-fit h-fit p-5'>
          <h1 className='font-semibold text-4xl max-md:text-3xl max-xs:text-2xl font-serif'>
            🪴 {error.status} - {error.statusText}
          </h1>
          <p className='max-w-sm text-center max-md:text-sm max-xs:text-xs'>
            La p&aacute;gina que se esta observando probablemente haya sido
            eliminado, cambio de ruta o temporalmente esta indisponible
          </p>

          <Link
            to='/'
            className='bg-skin-dark text-skin-light py-3 px-6 rounded-full font-medium w-fit max-md:text-sm max-sm:text-xs max-sm:px-4 max-sm:py-3'
          >
            Volver a Home
          </Link>
        </article>
      </section>
    );
  } else {
    return <div>Oops!</div>;
  }
};
