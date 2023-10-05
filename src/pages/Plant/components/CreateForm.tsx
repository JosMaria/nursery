import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ALL_CLASSIFICATIONS, ALL_STATUS } from '../../../constants';
import { traduceClassification, traduceStatus } from '../../../utils';
import { CloseButton, UploadFileInput } from '.';
import { CreatePlantSchemaType, createPlantSchema } from '../validations';
import { DevTool } from "@hookform/devtools";


export const CreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver<CreatePlantSchemaType>(createPlantSchema),
  });

  const {
    fields: fieldsDetails,
    append: appendDetail,
    remove: removeDetail,
  } = useFieldArray({
    control,
    name: 'details',
  });

  const {
    fields: fieldsNotes,
    append: appendNote,
    remove: removeNote,
  } = useFieldArray({
    control,
    name: 'notes',
  });

  const {
    fields: fieldDataSheet,
    append: appendContent,
    remove: removeContent,
  } = useFieldArray({
    control,
    name: 'dataSheet',
  });

  return (
    <>
    <form
      className='flex flex-col items-center gap-5 w-full'
      onSubmit={handleSubmit((schema) => {
        console.log(schema);
        console.log('es valido');
      })}
    >
      <div className='grid max-md:place-items-center justify-items-center grid-cols-2 max-md:grid-cols-1 gap-y-3 gap-x-10 w-full'>
        <fieldset className='flex flex-col gap-1 w-60'>
          <label className='font-medium text-sm'>Nombre com&uacute;n</label>
          <input className='custom-input-form' autoComplete='off' {...register('commonName')} />
          <p className='custom-lbl-form-error'>{errors.commonName?.message}</p>
        </fieldset>

        <section className='flex gap-3'>
          <fieldset className='flex flex-col gap-1'>
            <label className='font-medium text-sm'>(*) Nombre cientifico</label>
            <input
              type='text'
              className='custom-input-form w-52'
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
            <p className='custom-lbl-form-error whitespace-nowrap'>
              {errors.scientistLastnameInitial?.message}
            </p>
          </fieldset>
        </section>

        <fieldset className='flex flex-col gap-1'>
          <label className='font-medium text-sm' htmlFor='family'>
            (*) Familia
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
          <p className='custom-lbl-form-error'>{errors.status?.message}</p>
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
                  <label htmlFor={`classification-${index}`} className='text-xs sm:text-sm'>
                    {traduceClassification(classification)}
                  </label>
                </div>
              </li>
            ))}
          </ul>
          <p className='custom-lbl-form-error'>{errors.classifications?.message}</p>
        </fieldset>

        <fieldset className='flex flex-col gap-1 col-span-full w-full'>
          <label className='font-medium text-sm'>(*) Descripci&oacute;n</label>
          <textarea
            className='custom-input-form h-20'
            autoComplete='off'
            {...register('description')}
          ></textarea>
          <p className='custom-lbl-form-error'>{errors.description?.message}</p>
        </fieldset>

        <fieldset className='flex flex-col gap-2 w-full col-span-full'>
          <p className='font-medium text-sm'>(*) Detalles</p>
          <div className='flex flex-col gap-5'>
            {fieldsDetails.map((field, index) => (
              <div key={field.id} className='flex items-baseline gap-0.5'>
                <textarea
                  placeholder='Ingrese un detalle a la vez'
                  className='custom-input-form h-20 w-full'
                  autoComplete='off'
                  {...register(`details.${index}.detail` as const)}
                ></textarea>
                <CloseButton action={() => removeDetail(index)} />
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
          <p className='font-medium text-sm'>(*) Notas</p>
          <div className='flex flex-col gap-5'>
            {fieldsNotes.map((field, index) => (
              <div key={field.id} className='flex items-baseline gap-1'>
                <textarea
                  placeholder='Ingrese una nota a la vez'
                  className='custom-input-form h-20 w-full'
                  autoComplete='off'
                  {...register(`notes.${index}.note` as const)}
                ></textarea>
                <CloseButton action={() => removeNote(index)} />
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
          <p className='font-medium text-sm'>(*) Ficha Tecnica</p>
          <div className='flex flex-col gap-7'>
            {fieldDataSheet.map((field, index) => (
              <div key={field.id} className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <input
                    type='text'
                    placeholder='titulo'
                    autoComplete='off'
                    className='custom-input-form w-44'
                    {...register(`dataSheet.${index}.word` as const)}
                  />
                  <CloseButton action={() => removeContent(index)} />
                </div>
                <textarea
                  placeholder='Ingrese la definición'
                  autoComplete='off'
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
        </fieldset>
        <UploadFileInput register={register} />
      </div>
      <button className='custom-btn-form w-fit' type='submit'>
        Crear
      </button>
    </form>
          <DevTool control={control} /> </>

  );
};
