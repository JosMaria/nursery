import { Select, SelectOption } from './Select'
import { useState } from 'react'

const families = [
  { value: 'asparagaceae', label: 'asparagaceae' },
  { value: 'cactaceae', label: 'cactaceae' },
  { value: 'marantaceae', label: 'marantaceae' },
  { value: 'sapindaceae', label: 'sapindaceae' },
  { value: 'araliaceae', label: 'araliaceae' }
]

const status = [
  { value: 'AVAILABLE', label: 'DISPONIBLE' },
  { value: 'IN_CONSERVATION', label: 'EN CONSERVACIÓN' },
  { value: 'NON_EXISTENT', label: 'NO EXISTENTE' }
]

export const CreatePlant = () => {
  const [familiesState, setFamiliesState] = useState<SelectOption | undefined>(families[0])
  const [statusState, setStatusState] = useState<SelectOption | undefined>(status[0])
  const [classificationState, setClassificationState] = useState<SelectOption[]>([families[0]])

  const commonNameInput = (
    <div className='flex flex-col gap-1 w-fit'>
      <label
        className='font-medium text-sm'
        htmlFor='commonName'
      >
        Nombre Com&uacute;n
      </label>
      <input
        className='w-64 p-2 text-sm border rounded-md border-gray-200 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:border-blue-400'
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
      <div className='flex gap-3 w-64'>
        <input
          className='w-52 p-2 text-sm border rounded-md border-gray-200 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:border-blue-400'
          id='scientificName'
          type='text'
        />
        <input
          className='w-8 p-2 text-sm border rounded-md focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring border-gray-200 focus:border-blue-400'
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
        options={families}
        value={familiesState}
        onChange={option => setFamiliesState(option)}
      />
    </div>
  )

  const statusInput = (
    <div className='flex flex-col gap-1 w-fit'>
      <label
        className='font-medium text-sm'
        htmlFor='status'
      >
        Estado
      </label>
      <Select
        options={status}
        value={statusState}
        onChange={option => setStatusState(option)}
      />
    </div>
  )

  const classificationInput = (
    <div className='flex flex-col gap-1 w-fit'>
      <label
        className='font-medium text-sm'
        htmlFor='classification'
      >
        Estado
      </label>
      <Select
        multiple
        options={families}
        value={classificationState}
        onChange={option => setClassificationState(option)}
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
        {statusInput}
        {classificationInput}
      </form>
    </section>
  )
}
