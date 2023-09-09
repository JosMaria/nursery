import { Input, array, maxLength, minLength, object, string } from 'valibot';
import { useFieldArray, useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { traduceClassification, traduceStatus } from '../../../utils';
import { ALL_CLASSIFICATIONS, ALL_STATUS } from '../../../constants';
import { UploadFileInput } from '.';
import { CreatePlant, CreatePlantResponse, FetchFamilyResponse } from '../types';
import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { createPlant } from '../service';
import { toast } from 'react-hot-toast';

const CreatePlantSchema = object({
  commonName: string([minLength(1, 'Nombre común obligatorio')]),
  scientificName: string('Se debe agregar caracteres alfanumericos'),
  scientistLastnameInitial: string('Se debe agregar un caracter alfanumerico', [
    maxLength(1, 'Maximo 1 caracter'),
  ]),
  family: string('Se debe agregar caracteres alfanumericos'),
  status: string('Se debe agregar un estado'),
  classifications: array(string()),
  description: string(),
  details: array(object({ detail: string() })),
  notes: array(object({ note: string() })),
  dataSheet: array(
    object({
      word: string(),
      value: string(),
    })
  ),
});

type CreatePlantSchemaType = Input<typeof CreatePlantSchema>;

interface Props {
  families: FetchFamilyResponse[];
  createPlant: UseMutateAsyncFunction<CreatePlantResponse, unknown, CreatePlant, unknown>;
}

export const FormCreatePlant = ({ families }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<CreatePlantSchemaType>({
    resolver: valibotResolver(CreatePlantSchema),
  });

  const handleCreatePlant = (schema: CreatePlantSchemaType) => {
    const { notes, details, dataSheet, ...newSchema } = schema;

    const notesConverted = schema.notes.map((item) => item.note);
    const detailsConverted = schema.details.map((item) => item.detail);
    const technicalSheetConverted = schema.dataSheet.map((item) => ({
      word: item.word,
      info: item.value,
    }));

    createPlant({
      ...newSchema,
      notes: notesConverted,
      details: detailsConverted,
      technicalSheet: technicalSheetConverted,
    })
      .then(() => {
        toast.success('Familias guardadas exitosamente', {
          className: 'custom-toast-success',
        });
        reset();
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            toast.error(error.response.data.reason, {
              className: 'custom-toast-error',
            });
          }
        } else {
          throw new Error(error.message);
        }
      });
  };

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
      <p className='custom-lbl-form-error'>{errors.scientistLastnameInitial?.message}</p>
    </div>
  );

  const inputFamily = (
    <div className='flex flex-col gap-1'>
      <label className='font-medium text-sm' htmlFor='family'>
        Familia
      </label>
      <select id='family' className='custom-input-form w-52' {...register('family')}>
        <option value=''>sin familia</option>
        {families.map((family) => (
          <option key={family.id} value={family.name}>
            {family.name}
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
      <select id='status' className='custom-input-form w-52' {...register('status')}>
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
    </div>
  );

  const inputDescription = (
    <div className='flex flex-col gap-1 col-span-full'>
      <label className='font-medium text-sm'>Descripci&oacute;n</label>
      <textarea
        className='custom-input-form h-20'
        autoComplete='off'
        {...register('description')}
      ></textarea>
      <p className='custom-lbl-form-error'>{errors.description?.message}</p>
    </div>
  );

  const inputDetails = (
    <div className='flex flex-col gap-2 w-full col-span-full'>
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
    </div>
  );

  const inputNotes = (
    <div className='flex flex-col gap-2 w-full col-span-full'>
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
    </div>
  );

  const inputDataSheet = (
    <div className='flex flex-col gap-2 w-full col-span-full'>
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
    </div>
  );

  return (
    <form className='flex flex-col items-center gap-5' onSubmit={handleSubmit(handleCreatePlant)}>
      <div className='grid max-md:place-items-center grid-cols-2 max-md:grid-cols-1 gap-y-5 gap-x-10'>
        {commonName}
        <div className='flex justify-between gap-2 w-72'>
          {scientificName}
          {initialScientificName}
        </div>
        {inputFamily}
        {inputStatus}
        {inputClassifications}
        {inputDescription}
        {inputDetails}
        {inputNotes}
        {inputDataSheet}
        <UploadFileInput />
      </div>
      <button className='custom-btn-form w-fit' type='submit'>
        Crear
      </button>
    </form>
  );
};
