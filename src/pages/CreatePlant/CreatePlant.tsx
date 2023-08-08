export const CreatePlant = () => {

  const commonNameInput = (
    <div className='flex flex-col gap-1 w-fit'>
      <label
        className='font-medium text-sm'
        htmlFor='commonName'
      >
        Nombre Com&uacute;n
      </label>
      <input
        className='p-2 text-sm border rounded-md focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring bg-gray-200 border-gray-200 focus:border-blue-400'
        id='commonName'
        type='text'
      />
    </div>
  )

  const scientificNameInput = (
    <div className='flex flex-col gap-1 w-fit'>
      <label
        className='font-medium text-sm'
        htmlFor='scientificName'
      >
        Nombre Cientifico
      </label>
      <div className='flex gap-3'>
        <input
          className='p-2 text-sm border rounded-md focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring bg-gray-200 border-gray-200 focus:border-blue-400'
          id='scientificName'
          type='text'
        />
        <input
          className='w-10 p-2 text-sm border rounded-md focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring bg-gray-200 border-gray-200 focus:border-blue-400'
          id='scientificName'
          type='text'
        />
      </div>
    </div>
  )



  return (
    <section className='bg-neutral-300 max-w-screen-xl'>
      <h1 className='text-4xl indent-10'>Crear Planta</h1>
      <form className='flex flex-wrap gap-10 p-5'>
        {commonNameInput}
        {scientificNameInput}
      </form>
    </section>
  )
}