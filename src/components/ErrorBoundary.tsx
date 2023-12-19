export const ErrorBoundary = () => (
  <section className='flex flex-col items-center justify-center p-2'>
    <article className='max-w-xs w-full'>
      <h2 className='font-medium text-center md:text-xl'>Problema desconocido</h2>
      <p className='text-sm md:text-base'>
        Puede ser debido a problemas de conexi&oacute;n de intenet. Por favor, refresca la
        p&aacute;gina e int&eacute;ntelo nuevamente.
      </p>
    </article>
  </section>
);
