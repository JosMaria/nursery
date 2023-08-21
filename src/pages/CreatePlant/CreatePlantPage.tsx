import { useForm } from 'react-hook-form';
import { Input, array, maxLength, minLength, object, string } from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { PlantClassificationType, StatusType } from '../../types';
import { traduceClassification, traduceStatus } from '../../utils';

const familiesData = [
  'asparagaceae',
  'cactaceae',
  'marantaceae',
  'sapindaceae',
  'araliaceae',
];

const ALL_STATUS: Array<StatusType> = [
  'AVAILABLE',
  'IN_CONSERVATION',
  'NON_EXISTENT',
];

const classificationsData: Array<PlantClassificationType> = [
  'FRUITFUL',
  'ALIMENTARY',
  'ORNAMENTAL',
  'MEDICINAL',
  'CACTUS',
  'GRASS',
  'EXOTIC',
  'SUCCULENT',
  'INDUSTRIAL',
  'FOREST',
];

// const status = [
//   { value: 'AVAILABLE', label: 'DISPONIBLE' },
//   { value: 'IN_CONSERVATION', label: 'EN CONSERVACIÓN' },
//   { value: 'NON_EXISTENT', label: 'NO EXISTENTE' }
// ]
/*
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
*/

const CreatePlantSchema = object({
  commonName: string([minLength(1, 'Nombre común obligatorio')]),
  scientificName: string('Se debe agregar caracteres alfanumericos'),
  scientistLastnameInitial: string('Se debe agregar un caracter alfanumerico', [
    maxLength(1, 'Maximo 1 caracter'),
  ]),
  family: string('Se debe agregar caracteres alfanumericos'),
  status: string('Se debe agregar un estado'),
  classifications: array(string()),
});

type CreatePlantType = Input<typeof CreatePlantSchema>;

export const CreatePlantPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePlantType>({
    resolver: valibotResolver(CreatePlantSchema),
  });

  const commonName = (
    <div className='flex flex-col gap-1 w-72'>
      <label className='font-medium text-sm'>Nombre com&uacute;n</label>
      <input
        type='text'
        className='custom-input-form'
        autoComplete='off'
        {...register('commonName')}
      />
      <p className='custom-lbl-form-error'>{errors.commonName?.message}</p>
    </div>
  );

  const scientificName = (
    <div className='flex flex-col gap-1'>
      <label className='font-medium text-sm'>Nombre cientifico</label>
      <input
        type='text'
        className='custom-input-form'
        autoComplete='off'
        {...register('scientificName')}
      />
      <p className='custom-lbl-form-error'>{errors.scientificName?.message}</p>
    </div>
  );

  const initialScientificName = (
    <div className='flex flex-col gap-1'>
      <label className='font-medium text-sm'>Inicial</label>
      <input
        type='text'
        className='custom-input-form w-10'
        autoComplete='off'
        {...register('scientistLastnameInitial')}
      />
      <p className='custom-lbl-form-error'>
        {errors.scientistLastnameInitial?.message}
      </p>
    </div>
  );

  const inputFamily = (
    <div className='flex flex-col gap-1'>
      <label className='font-medium text-sm' htmlFor='family'>
        Familia
      </label>
      <select
        id='family'
        className='custom-input-form w-52'
        {...register('family')}
      >
        <option value=''>sin familia</option>
        {familiesData.map((family) => (
          <option key={family} value={family}>
            {family}
          </option>
        ))}
      </select>
    </div>
  );

  const inputStatus = (
    <div className='flex flex-col gap-1'>
      <label className='font-medium text-sm' htmlFor='status'>
        Estado
      </label>
      <select
        id='status'
        className='custom-input-form w-52'
        {...register('status')}
      >
        {ALL_STATUS.map((status) => (
          <option key={status} value={status}>
            {traduceStatus(status)}
          </option>
        ))}
      </select>
    </div>
  );

  const inputClassifications = (
    <div className='flex flex-col gap-1 col-span-full'>
      <p className='font-medium text-sm'>Clasificaciones</p>
      <ul className='flex flex-wrap gap-6 max-w-2xl p-2 bg-skin-light justify-center '>
        {classificationsData.map((classification, index) => (
          <li key={index}>
            <div className='flex gap-1'>
              <input
                type='checkbox'
                id={`classification-${index}`}
                value={classification}
                className='w-4'
                {...register('classifications')}
              />
              <label htmlFor={`classification-${index}`} className='text-xs'>
                {traduceClassification(classification)}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className='w-full bg-skin-form'>
      <article className='flex flex-col items-center gap-5 p-5'>
        <h1 className='font-medium text-2xl'>Crear Planta</h1>
        <form
          className='flex flex-col items-center gap-5'
          onSubmit={handleSubmit((e) => console.log(e))}
        >
          <div className='grid grid-cols-2 max-md:grid-cols-1 gap-y-5 gap-x-10'>
            {commonName}
            <div className='flex justify-between gap-2 w-72'>
              {scientificName}
              {initialScientificName}
            </div>
            {inputFamily}
            {inputStatus}
            {inputClassifications}
          </div>

          <button className='custom-btn-form w-fit' type='submit'>
            Crear
          </button>
        </form>
      </article>
    </section>
  );
};
