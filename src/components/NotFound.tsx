import { Link } from 'react-router-dom';

export const NotFound = () => (
  <section className='flex items-center justify-center'>
    <article className='flex flex-col items-center gap-5 max-xs:gap-2 w-fit p-3'>
      <h1 className='font-serif font-semibold max-xs:text-2xl max-md:text-3xl text-4xl'>
        🪴 404 - Not Found
      </h1>
      <div className='flex flex-col items-start max-sm:text-sm'>
        <p>Que pudo pasar:</p>
        <ul className='list-inside list-disc list'>
          <li>P&aacute;gina puede que haya sido eliminada</li>
          <li>P&aacute;gina con ruta incorrecta</li>
          <li>P&aacute;gina puede no disponible temporal o permanentemente</li>
        </ul>
      </div>
      <Link className='button-custom self-start flex gap-2' to='..' relative='route'>
        <span>&#10229;</span>
        Volver atr&aacute;s
      </Link>
    </article>
  </section>
);
