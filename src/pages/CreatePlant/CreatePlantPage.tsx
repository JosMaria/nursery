import { useFieldArray, useForm } from 'react-hook-form';
import { Input, array, maxLength, minLength, object, string } from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { PlantClassificationType, StatusType } from '../../types';
import { traduceClassification, traduceStatus } from '../../utils';
import { DevTool } from '@hookform/devtools';

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

const CreatePlantSchema = object({
  commonName: string([minLength(1, 'Nombre común obligatorio')]),
  scientificName: string('Se debe agregar caracteres alfanumericos'),
  scientistLastnameInitial: string('Se debe agregar un caracter alfanumerico', [
    maxLength(1, 'Maximo 1 caracter'),
  ]),
  family: string('Se debe agregar caracteres alfanumericos'),
  status: string('Se debe agregar un estado'),
  classifications: array(string()),
  details: array(object({ detail: string() })),
});

type CreatePlantType = Input<typeof CreatePlantSchema>;

export const CreatePlantPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreatePlantType>({
    resolver: valibotResolver(CreatePlantSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'details',
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

  const inputDetails = (
    <div className='flex flex-col gap-2 w-full col-span-full'>
      <div className='flex items-start gap-5'>
        <p className='font-medium text-sm'>Detalles</p>
        <button
          type='button'
          onClick={() => append({ detail: '' })}
          className='bg-blue-600 hover:bg-blue-500 text-white font-medium py-1.5 px-4 text-xs rounded-md '
        >
          Agregar
        </button>
      </div>
      <div className='flex flex-col gap-5'>
        {fields.map((field, index) => (
          <div key={field.id} className='flex items-baseline gap-1'>
            <textarea
              placeholder='Ingresa un detalle a la vez'
              className='custom-input-form h-20 w-full'
              {...register(`details.${index}.detail` as const)}
            ></textarea>
            <button
              type='button'
              onClick={() => remove(index)}
              className='leading-none px-2 rounded-md bg-red-500 text-2xl text-white'
            >
              &#215;
            </button>
          </div>
        ))}
      </div>
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
          <div className='grid max-md:place-items-center grid-cols-2 max-md:grid-cols-1 gap-y-5 gap-x-10'>
            {commonName}
            <div className='flex justify-between gap-2 w-72'>
              {scientificName}
              {initialScientificName}
            </div>
            {inputFamily}
            {inputStatus}
            {inputClassifications}
            {inputDetails}
          </div>

          <button className='custom-btn-form w-fit' type='submit'>
            Crear
          </button>
        </form>
        <DevTool control={control} />
      </article>
    </section>
  );
};
