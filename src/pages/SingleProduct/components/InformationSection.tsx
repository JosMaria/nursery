export const InformationSection = () => {
  return (
    <article className='max-w-2xl w-full flex flex-col items-center gap-5 text-sm max-sm:text-xs bg-skin-form px-4 py-2'>
      <h1 className='text-2xl font-medium'>Flor de navidad</h1>
      <div className='grid grid-cols-2 gap-y-1'>
        <p className='font-medium'>Nombre Cientifico:</p>
        <p>euphorbia pulcherrima</p>

        <p className='font-medium'>Familia:</p>
        <p>
          <i>euphorbiaceae</i>
        </p>

        <p className='font-medium'>Estado:</p>
        <p>DISPONIBLE</p>

        <p className='font-medium'>Classificaciones:</p>
        <ul>
          <li>ORNAMENTAL</li>
          <li>FORESTAL</li>
        </ul>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='font-medium tracking-wide'>DESCRIPCION</p>
        <p>
          Planta perennes, herbáceas o leñosas, erectas, rastreras o trepadoras,
          de hojas muy decorativas. Las hojas son de consistencia y grosor
          notables, ovales, en forma de corazón o punta de flecha, bastante
          grande, a veces divididas en lóbulos o incluso en forma de mano.
        </p>
      </div>
    </article>
  );
};
