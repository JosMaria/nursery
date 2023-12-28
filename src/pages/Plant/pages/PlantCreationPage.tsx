import { useId } from 'react';
import { traduceClassification, traduceStatus } from '../../../utils';
import { StatusType } from '../../../types';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createPlant } from '../services';
import { PlantCreationSchemaType, plantCreationSchema } from '../validations';
import { CloseButton } from '../components';

const PlantCreationPage = () => {
  const id = useId();
  const queryClient = useQueryClient();

  const { mutateAsync: createPlantMutationAsync } = useMutation({
    mutationFn: createPlant,
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ['plants'] });
      reset();
      toast.success(`Planta ${data.commonName} guardada existosamente guardada existosamente`, {
        className: 'successfully-alert-custom',
      });
    },
    onError() {},
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver<PlantCreationSchemaType>(plantCreationSchema),
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
        onSubmit={handleSubmit((schema) => {
          const { details, technicalSheet, ...schemaConverted } = schema;
          const detailsConverted = schema.details.map((item) => item.detail);
          const technicalSheetConverted = schema.technicalSheet.map((item) => ({
            word: item.word,
            info: item.value,
          }));

          createPlantMutationAsync({
            ...schemaConverted,
            details: detailsConverted,
            technicalSheet: technicalSheetConverted,
          });
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

          <fieldset className='col-span-full flex flex-col gap-1'>
            <p>Clasificaciones</p>
            <ul className='flex flex-wrap gap-5 max-sm:gap-4 max-w-2xl p-3 bg-custom-light justify-center'>
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
                  <div className='flex items-center gap-1'>
                    <input
                      id={`${id}-classification-${index}`}
                      type='checkbox'
                      value={classification}
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
                  <CloseButton action={() => removeDetail(index)} />
                </div>
              ))}
            </div>
            <button
              type='button'
              onClick={() => appendDetail({ detail: '' })}
              className='button-custom'
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
                    <CloseButton action={() => removeContent(index)} />
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
