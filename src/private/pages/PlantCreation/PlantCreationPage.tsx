import { PlantCreationSchemaType, plantCreationSchema } from './validations/validation';
import { translateClassification, translateStatus } from '../../../utils';
import { ALL_CLASSIFICATIONS, ALL_STATUS } from '../../../constants';
import { createPlant, fetchAllFamilies } from './services/service';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toPlantCreationDTOType } from './utils/changeTyping';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosErrorType } from '../../types';
import toast from 'react-hot-toast';
import { useId } from 'react';

const PlantCreationPage = () => {
  const id = useId();
  const { data: families } = useQuery({ queryKey: ['families'], queryFn: fetchAllFamilies });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver<PlantCreationSchemaType>(plantCreationSchema),
    defaultValues: {
      price: 0,
      classifications: [],
    },
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

  const { mutateAsync: createPlantMutateAsync } = useMutation({
    mutationFn: createPlant,
    onSuccess: (response) => {
      reset();
      toast.success(`Planta ${response.commonName} guardada existosamente`, {
        className: 'successfully-alert-custom',
      });
    },
    onError: (error: AxiosErrorType) => {
      const { response } = error;
      toast.error(response.data.reason, { className: 'error-alert-custom' });
    },
  });

  return (
    <article className='bg-custom-light w-full flex flex-col items-center gap-2'>
      <h1 className='h1-custom'>Crear Planta</h1>
      <form
        className='bg-custom-medium flex flex-col items-center gap-5 w-full max-w-3xl max-sm:p-2 p-5 '
        onSubmit={handleSubmit((schema) => createPlantMutateAsync(toPlantCreationDTOType(schema)))}
      >
        <div className='grid max-md:place-items-center justify-items-center grid-cols-2 max-md:grid-cols-1 gap-y-5 max-sm:gap-y-3 gap-x-10 w-full'>
          <fieldset className='flex flex-col gap-1 w-60'>
            <label className='text-sm font-medium' htmlFor={`${id}-commonName`}>
              Nombre com&uacute;n
            </label>
            <input
              className='input-custom'
              id={`${id}-commonName`}
              autoComplete='off'
              {...register('commonName')}
            />
            <p className='msg-error-validation-custom'>{errors.commonName?.message}</p>
          </fieldset>

          <section className='flex gap-3'>
            <fieldset className='flex flex-col gap-1'>
              <label className='text-sm font-medium' htmlFor={`${id}-scientificName`}>
                (*) Nombre cientifico
              </label>
              <input
                className='input-custom w-52'
                id={`${id}-scientificName`}
                autoComplete='off'
                {...register('scientificName')}
              />
              <p className='msg-error-validation-custom'>{errors.scientificName?.message}</p>
            </fieldset>
            <fieldset className='flex flex-col gap-1'>
              <label className='text-sm font-medium' htmlFor={`${id}-scientistLastnameInitial`}>
                Inicial
              </label>
              <input
                className='input-custom w-10'
                id={`${id}-scientistLastnameInitial`}
                autoComplete='off'
                {...register('scientistLastnameInitial')}
              />
              <p className='msg-error-validation-custom whitespace-nowrap'>
                {errors.scientistLastnameInitial?.message}
              </p>
            </fieldset>
          </section>

          <fieldset className='flex flex-col gap-1'>
            <label className='text-sm font-medium' htmlFor={`${id}-family`}>
              (*) Familia
            </label>
            <select className='input-custom w-60' id={`${id}-family`} {...register('family')}>
              <option value='sin familia'>sin familia</option>
              {families?.map((family) => (
                <option key={family.id} value={family.name}>
                  {family.name}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className='flex flex-col gap-1'>
            <label className='text-sm font-medium' htmlFor={`${id}-status`}>
              Estado
            </label>
            <select className='input-custom w-60' id={`${id}-status`} {...register('status')}>
              {ALL_STATUS.map((status) => (
                <option key={status} value={status}>
                  {translateStatus(status)}
                </option>
              ))}
            </select>
            <p className='msg-error-validation-custom'>{errors.status?.message}</p>
          </fieldset>

          <fieldset className='flex flex-col gap-1 w-60'>
            <label className='text-sm font-medium' htmlFor={`${id}-price`}>
              Precio
            </label>
            <input
              className='input-custom'
              id={`${id}-price`}
              autoComplete='off'
              {...register('price', { valueAsNumber: true })}
            />
            <p className='msg-error-validation-custom'>{errors.price?.message}</p>
          </fieldset>

          <fieldset className='flex flex-col gap-1 col-span-full'>
            <p className='font-medium text-sm'>Clasificaciones</p>
            <ul className='flex flex-wrap gap-x-6 gap-y-4 max-sm:gap-y-2 max-w-2xl p-2 bg-custom-light justify-center'>
              {ALL_CLASSIFICATIONS.map((classification, index) => (
                <li key={index}>
                  <div className='flex items-center gap-1'>
                    <input
                      className='w-3.5 h-3.5 accent-custom-dark focus:outline-none focus:ring-2 focus:ring-custom-dark'
                      type='checkbox'
                      id={`${id}-classification-${index}`}
                      value={classification}
                      {...register('classifications')}
                    />
                    <label
                      className='text-xs sm:text-sm select-none'
                      htmlFor={`${id}-classification-${index}`}
                    >
                      {translateClassification(classification)}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
            <p className='msg-error-validation-custom'>{errors.classifications?.message}</p>
          </fieldset>

          <fieldset className='col-span-full flex flex-col gap-1 w-full'>
            <label className='font-medium text-sm' htmlFor={`${id}-description`}>
              (*) Descripci&oacute;n
            </label>
            <textarea
              className='input-custom h-16'
              id={`${id}-description`}
              autoComplete='off'
              {...register('description')}
            ></textarea>
            <p className='msg-error-validation-custom'>{errors.description?.message}</p>
          </fieldset>

          <fieldset className='flex flex-col gap-2 w-full col-span-full'>
            <p className='font-medium text-sm'>(*) Detalles</p>
            <div className='flex flex-col gap-5'>
              {fieldsDetails.map((field, index) => (
                <div key={field.id} className='flex items-baseline gap-1.5'>
                  <textarea
                    placeholder='Ingrese un detalle a la vez'
                    className='input-custom h-16 w-full'
                    autoComplete='off'
                    {...register(`details.${index}.detail` as const)}
                  ></textarea>
                  <button
                    className='focus:outline-none focus:border focus:border-custom-light focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5 leading-3 font-medium text-xl'
                    type='button'
                    onClick={() => removeDetail(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <button className='button-custom' onClick={() => appendDetail({ detail: '' })}>
              +1 Detalle
            </button>
          </fieldset>

          <fieldset className='flex flex-col gap-2 w-full col-span-full'>
            <p className='font-medium text-sm'>(*) Ficha Tecnica</p>
            <div className='flex flex-col gap-7'>
              {fieldTechnicalSheet.map((field, index) => (
                <div key={field.id} className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <input
                      type='text'
                      placeholder='Titulo'
                      autoComplete='off'
                      className='input-custom w-44'
                      {...register(`technicalSheet.${index}.word` as const)}
                    />
                    <button
                      className='focus:outline-none focus:border focus:border-custom-light focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5 leading-3 font-medium text-xl'
                      type='button'
                      onClick={() => removeContent(index)}
                    >
                      &times;
                    </button>
                  </div>
                  <textarea
                    className='input-custom h-16 w-full'
                    placeholder='Ingrese la definición'
                    autoComplete='off'
                    {...register(`technicalSheet.${index}.value` as const)}
                  ></textarea>
                </div>
              ))}
            </div>
            <button
              className='button-custom'
              onClick={() => appendContent({ word: '', value: '' })}
            >
              +1 Valor
            </button>
          </fieldset>
        </div>
        <button className='button-custom' type='submit'>
          Crear
        </button>
      </form>
    </article>
  );
};

export default PlantCreationPage;
