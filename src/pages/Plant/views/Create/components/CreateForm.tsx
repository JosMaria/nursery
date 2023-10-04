import { useFieldArray, useForm } from 'react-hook-form';
import { CreatePlantSchema, CreatePlantSchemaType } from '../../../validations';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { ALL_CLASSIFICATIONS, ALL_STATUS } from '../../../../../constants';
import { traduceClassification, traduceStatus } from '../../../../../utils';

export const CreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreatePlantSchemaType>({
    resolver: valibotResolver(CreatePlantSchema),
  });

  // const {
  //   fields: fieldsDetails,
  //   append: appendDetail,
  //   remove: removeDetail,
  // } = useFieldArray({
  //   control,
  //   name: 'details',
  // });

  // const {
  //   fields: fieldsNotes,
  //   append: appendNote,
  //   remove: removeNote,
  // } = useFieldArray({
  //   control,
  //   name: 'notes',
  // });

  // const {
  //   fields: fieldDataSheet,
  //   append: appendContent,
  //   remove: removeContent,
  // } = useFieldArray({
  //   control,
  //   name: 'dataSheet',
  // });

  return (
    <form
      className='flex flex-col items-center gap-5'
      onSubmit={handleSubmit((schema) =>
        console.log({ commonName: schema.commonName.trim().toLowerCase() })
      )}
    >
      <div className='grid max-md:place-items-center grid-cols-2 max-md:grid-cols-1 gap-y-5 gap-x-10'>
        <fieldset className='flex flex-col gap-1 w-72'>
          <label className='font-medium text-sm'>Nombre com&uacute;n</label>
          <input className='custom-input-form' autoComplete='off' {...register('commonName')} />
          <p className='custom-lbl-form-error'>{errors.commonName?.message}</p>
        </fieldset>
        {/*
        <section className='flex justify-between gap-2 w-72'>
          <fieldset className='flex flex-col gap-1'>
            <label className='font-medium text-sm'>Nombre cientifico</label>
            <input
              type='text'
              className='custom-input-form'
              autoComplete='off'
              {...register('scientificName')}
            />
            <p className='custom-lbl-form-error'>{errors.scientificName?.message}</p>
          </fieldset>
          <fieldset className='flex flex-col gap-1'>
            <label className='font-medium text-sm'>Inicial</label>
            <input
              type='text'
              className='custom-input-form w-10'
              autoComplete='off'
              {...register('scientistLastnameInitial')}
            />
            <p className='custom-lbl-form-error'>{errors.scientistLastnameInitial?.message}</p>
          </fieldset>
        </section>

        <fieldset className='flex flex-col gap-1'>
          <label className='font-medium text-sm' htmlFor='family'>
            Familia
          </label>
          <select id='family' className='custom-input-form w-52' {...register('family')}>
            <option value=''>sin familia</option>
            {[{ id: 1, name: 'family' }].map((family) => (
              <option key={family.id} value={family.name}>
                {family.name}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className='flex flex-col gap-1'>
          <label className='font-medium text-sm' htmlFor='status'>
            Estado
          </label>
          <select id='status' className='custom-input-form w-52' {...register('status')}>
            {ALL_STATUS.map((status) => (
              <option key={status} value={status}>
                {traduceStatus(status)}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className='flex flex-col gap-1 col-span-full'>
          <p className='font-medium text-sm'>Clasificaciones</p>
          <ul className='flex flex-wrap gap-6 max-sm:gap-4 max-w-2xl p-2 bg-skin-light justify-center '>
            {ALL_CLASSIFICATIONS.map((classification, index) => (
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
        </fieldset>

        <fieldset className='flex flex-col gap-1 col-span-full w-full'>
          <label className='font-medium text-sm'>Descripci&oacute;n</label>
          <textarea
            className='custom-input-form h-20'
            autoComplete='off'
            {...register('description')}
          ></textarea>
          <p className='custom-lbl-form-error'>{errors.description?.message}</p>
        </fieldset>

        <fieldset className='flex flex-col gap-2 w-full col-span-full'>
          <p className='font-medium text-sm'>Detalles</p>
          <div className='flex flex-col gap-5'>
            {fieldsDetails.map((field, index) => (
              <div key={field.id} className='flex items-baseline gap-1'>
                <textarea
                  placeholder='Ingrese un detalle a la vez'
                  className='custom-input-form h-20 w-full'
                  {...register(`details.${index}.detail` as const)}
                ></textarea>
                <button
                  type='button'
                  onClick={() => removeDetail(index)}
                  className='leading-none px-2 rounded-md bg-red-500 text-2xl text-white'
                >
                  &#215;
                </button>
              </div>
            ))}
          </div>
          <button
            type='button'
            onClick={() => appendDetail({ detail: '' })}
            className='custom-btn-form'
          >
            Agregar Detalle
          </button>
        </fieldset>

        <fieldset className='flex flex-col gap-2 w-full col-span-full'>
          <p className='font-medium text-sm'>Notas</p>
          <div className='flex flex-col gap-5'>
            {fieldsNotes.map((field, index) => (
              <div key={field.id} className='flex items-baseline gap-1'>
                <textarea
                  placeholder='Ingrese una nota a la vez'
                  className='custom-input-form h-20 w-full'
                  {...register(`notes.${index}.note` as const)}
                ></textarea>
                <button
                  type='button'
                  onClick={() => removeNote(index)}
                  className='leading-none px-2 rounded-md bg-red-500 text-2xl text-white'
                >
                  &#215;
                </button>
              </div>
            ))}
          </div>
          <button
            type='button'
            onClick={() => appendNote({ note: '' })}
            className='custom-btn-form'
          >
            Agregar Nota
          </button>
        </fieldset>

        <fieldset className='flex flex-col gap-2 w-full col-span-full'>
          <p className='font-medium text-sm'>Fichar Tecnica</p>
          <div className='flex flex-col gap-7'>
            {fieldDataSheet.map((field, index) => (
              <div key={field.id} className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                  <input
                    type='text'
                    placeholder='titulo'
                    className='custom-input-form w-44'
                    {...register(`dataSheet.${index}.word` as const)}
                  />
                  <button
                    type='button'
                    onClick={() => removeContent(index)}
                    className='leading-none px-2 rounded-md bg-red-500 text-2xl text-white'
                  >
                    &#215;
                  </button>
                </div>
                <textarea
                  placeholder='Ingrese una nota a la vez'
                  className='custom-input-form h-16 w-full'
                  {...register(`dataSheet.${index}.value` as const)}
                ></textarea>
              </div>
            ))}
          </div>
          <button
            type='button'
            className='custom-btn-form'
            onClick={() => appendContent({ word: '', value: '' })}
          >
            Agregar valor
          </button>
        </fieldset> */}
      </div>

      <button className='custom-btn-form w-fit' type='submit'>
        Crear
      </button>
    </form>
  );
};
