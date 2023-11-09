//import { StatusType } from '../../../types';
//import { traduceStatus } from '../../../utils';

import { useId } from 'react';
import { traduceClassification, traduceStatus } from '../../../utils';
import { PlantClassificationType, StatusType } from '../../../types';
import { InferType, array, object, string } from 'yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const createPlantSchema = object({
  commonName: string()
    .matches(/^(?!\s*$).+/, 'Nombre común obligatorio')
    .required('Nombre común requerido'),
  scientificName: string().default(''),
  scientistLastnameInitial: string().max(1, 'Max 1 letra').default(''),
  family: string().default(''),
  status: string().required(),
  classifications: array(string().required()).default([]),
  description: string().default(''),
  details: array(object({ detail: string().required() })).default([]),
  technicalSheet: array(object({ word: string().required(), value: string().required() })).default(
    []
  ),
});

export type CreatePlantSchemaType = InferType<typeof createPlantSchema>;

const PlantCreationPage = () => {
  const id = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
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
    fields: fieldTechnicalSheet,
    append: appendContent,
    remove: removeContent,
  } = useFieldArray({
    control,
    name: 'technicalSheet',
  });

  return (
    <section className='w-full flex flex-col items-center gap-2 select-none'>
      <h1 className='h1-custom'>Crear Planta</h1>
      <form
        className='p-3 bg-custom-medium max-w-4xl w-full flex flex-col items-center gap-4 text-sm max-xs:text-xs'
        onSubmit={handleSubmit((e) => {
          console.log(e);
          reset();
        })}
      >
        <div className='w-full grid grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-4'>
          <fieldset className='flex flex-col gap-1'>
            <label htmlFor={`${id}-commonName`} className='font-medium'>
              Nombre com&uacute;n
            </label>
            <input
              id={`${id}-commonName`}
              className='input-custom'
              type='text'
              autoComplete='off'
              {...register('commonName')}
            />
            <p className='msg-error-validation-custom'>{errors.commonName?.message}</p>
          </fieldset>

          <section className='flex gap-3'>
            <fieldset className='flex flex-col gap-1'>
              <label htmlFor={`${id}-scientificName`} className='font-medium'>
                (*) Nombre cientifico
              </label>
              <input
                id={`${id}-scientificName`}
                className='input-custom'
                type='text'
                autoComplete='off'
                {...register('scientificName')}
              />
              <p className='msg-error-validation-custom'>{errors.scientificName?.message}</p>
            </fieldset>
            <fieldset className='flex flex-col gap-1'>
              <label htmlFor={`${id}-initialScientificName`} className='font-medium'>
                Inicial
              </label>
              <input
                id={`${id}-initialScientificName`}
                className='input-custom w-10'
                type='text'
                autoComplete='off'
                {...register('scientistLastnameInitial')}
              />
              <p className='msg-error-validation-custom'>
                {errors.scientistLastnameInitial?.message}
              </p>
            </fieldset>
          </section>

          <fieldset className='flex flex-col gap-1'>
            <label htmlFor={`${id}-family`} className='font-medium'>
              (*) Familia
            </label>
            <select id={`${id}-family`} className='input-custom w-56' {...register('family')}>
              <option value=''>sin familia</option>
              {[
                { id: 1, name: 'familiaone' },
                { id: 2, name: 'familiatwo' },
              ].map((family) => (
                <option key={family.id} value={family.name}>
                  {family.name}
                </option>
              ))}
            </select>
            <p className='msg-error-validation-custom'>{errors.family?.message}</p>
          </fieldset>

          <fieldset className='flex flex-col gap-1'>
            <label htmlFor={`${id}-status`} className='font-medium text-sm'>
              Estado
            </label>
            <select id={`${id}-status`} className='input-custom w-52' {...register('status')}>
              {['AVAILABLE', 'NON_EXISTENT', 'IN_CONSERVATION'].map((status) => (
                <option key={status} value={status}>
                  {traduceStatus(status as StatusType)}
                </option>
              ))}
            </select>
            <p className='msg-error-validation-custom'>{errors.status?.message}</p>
          </fieldset>

          <fieldset className='col-span-full flex flex-col gap-1 font-medium'>
            <p>Clasificaciones</p>
            <ul className='flex flex-wrap gap-5 max-sm:gap-4 max-w-2xl p-3 bg-custom-light text-custom-dark justify-center '>
              {[
                'ORNAMENTAL',
                'FOREST',
                'INDUSTRIAL',
                'ALIMENTARY',
                'MEDICINAL',
                'EXOTIC',
                'CACTUS',
                'FRUITFUL',
                'GRASS',
                'SUCCULENT',
              ].map((classification, index) => (
                <li key={index}>
                  <div className='flex items-start gap-1'>
                    <input
                      id={`${id}-classification-${index}`}
                      type='checkbox'
                      value={classification}
                      defaultValue={[]}
                      className='input-custom accent-sky-800 h-fit'
                      {...register('classifications')}
                    />
                    <label htmlFor={`${id}-classification-${index}`} className='text-xs sm:text-sm'>
                      {traduceClassification(classification as PlantClassificationType)}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
            <p className='msg-error-validation-custom'>{errors.classifications?.message}</p>
          </fieldset>

          <fieldset className='col-span-full w-3/4 max-sm:w-4/5 max-xs:w-full flex flex-col gap-1'>
            <label className='font-medium'>(*) Descripci&oacute;n</label>
            <textarea
              className='input-custom'
              autoComplete='off'
              {...register('description')}
            ></textarea>
            <p className='msg-error-validation-custom'>{errors.description?.message}</p>
          </fieldset>

          <fieldset className='col-span-full w-3/4 max-sm:w-4/5 max-xs:w-full flex flex-col gap-2'>
            <p className='font-medium'>(*) Detalles</p>
            <div className='flex flex-col gap-5'>
              {fieldsDetails.map((field, index) => (
                <div key={field.id} className='flex items-baseline gap-1'>
                  <textarea
                    placeholder='Ingrese un detalle a la vez'
                    className='input-custom w-full'
                    autoComplete='off'
                    {...register(`details.${index}.detail` as const)}
                  ></textarea>
                  <button
                    className='bg-red-500 hover:bg-red-600 border focus:border-white focus:outline-none focus:ring focus:ring-red-400 text-white font-bold text-xl leading-3 p-1 rounded'
                    type='button'
                    onClick={() => removeDetail(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <button
              type='button'
              onClick={() => appendDetail({ detail: '' })}
              className='button-custom w-fit'
            >
              {fieldsDetails.length === 0 ? 'Agregar Detalle' : '+1 Detalle'}
            </button>
          </fieldset>

          <fieldset className='col-span-full w-3/4 max-sm:w-4/5 max-xs:w-full flex flex-col gap-2'>
            <p className='font-medium'>(*) Ficha Tecnica</p>
            <div className='flex flex-col gap-7'>
              {fieldTechnicalSheet.map((field, index) => (
                <div key={field.id} className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <input
                      type='text'
                      placeholder='titulo'
                      autoComplete='off'
                      className='input-custom w-44'
                      {...register(`technicalSheet.${index}.word` as const)}
                    />
                    <button
                      className='bg-red-500 hover:bg-red-600 border focus:border-white focus:outline-none focus:ring focus:ring-red-400 text-white font-bold text-xl leading-3 p-1 rounded'
                      type='button'
                      onClick={() => removeContent(index)}
                    >
                      &times;
                    </button>
                  </div>
                  <textarea
                    placeholder='Ingrese la definición'
                    autoComplete='off'
                    className='input-custom'
                    {...register(`technicalSheet.${index}.value` as const)}
                  ></textarea>
                </div>
              ))}
            </div>
            <button
              type='button'
              className='button-custom w-fit'
              onClick={() => appendContent({ word: '', value: '' })}
            >
              {fieldTechnicalSheet.length === 0 ? 'Agregar Valor' : '+1 valor'}
            </button>
          </fieldset>
        </div>

        <button className='button-custom' type='submit'>
          Crear
        </button>
      </form>
    </section>
  );
};

export default PlantCreationPage;
