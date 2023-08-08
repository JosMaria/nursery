import Select from 'react-select'

const families = [
  { value: 'asparagaceae', label: 'asparagaceae' },
  { value: 'cactaceae', label: 'cactaceae' },
  { value: 'marantaceae', label: 'marantaceae' },
  { value: 'sapindaceae', label: 'sapindaceae' },
  { value: 'araliaceae', label: 'araliaceae' }
]

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
        className='p-2 text-sm border rounded-md border-gray-200 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:border-blue-400'
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
          className='p-2 text-sm border rounded-md border-gray-200 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:border-blue-400'
          id='scientificName'
          type='text'
        />
        <input
          className='w-10 p-2 text-sm border rounded-md focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring border-gray-200 focus:border-blue-400'
          id='scientificName'
          type='text'
        />
      </div>
    </div>
  )

  const familyInput = (
    <div className='flex flex-col gap-1 w-fit'>
      <label
        className='font-medium text-sm'
        htmlFor='family'
      >
        Familia
      </label>
      <Select
        className='w-64 text-sm border rounded-md border-gray-200 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:border-blue-400'
        id='family'
        isClearable={true}
        isSearchable={true}
        options={families}
        placeholder='Seleccionar...'
      />
    </div>
  )

  return (
    <section className='bg-neutral-300 max-w-screen-xl'>
      <h1 className='text-4xl indent-10'>Crear Planta</h1>
      <form className='flex flex-wrap gap-5 p-5'>
        {commonNameInput}
        {scientificNameInput}
        {familyInput}
      </form>
    </section>
  )
}
