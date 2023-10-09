export const DangerZone = () => (
  <section className='max-w-2xl w-full bg-skin-form p-3 flex flex-col gap-1'>
    <h2 className='text-skin-dark text-xl font-medium'>Zona Peligrosa</h2>
    <article className='w-full border-2 border-red-600 rounded-md p-1.5 flex flex-wrap items-center justify-between gap-2 bg-skin-light'>
      <div className='text-sm'>
        <p className='font-medium text-base max-sm:text-sm'>Eliminar esta planta</p>
        <p className='max-sm:text-xs'>
          Una vez que eliminas la planta, no hay vuelta atrás. Por favor esté seguro.
        </p>
      </div>
      <button className='rounded text-sm max-sm:text-xs font-medium py-1 px-3 h-fit border border-red-500 text-red-800 bg-red-100 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600'>
        Eliminar esta planta
      </button>
    </article>
  </section>
);
