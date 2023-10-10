import { useParams } from 'react-router-dom';
import { fetchProductByID } from './services';
import { useQuery } from '@tanstack/react-query';
import { EditButton, DangerZone } from './components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { InferType, array, object, string } from 'yup';
import { PlantToModifyProvider } from './context';

const ModifyPlantPage = () => {
  const { id } = useParams();

  return (
    <PlantToModifyProvider plantId={Number(id)}>
      <section className='w-full'>
        {/* <h1 className='text-2xl font-medium'>Configuraci&oacute;n de la planta</h1> */}
        <DangerZone />

        {/* <SectionInfoBase commonName={plantToModify.}classifications={plantToModify.classifications}/> */}
        {/*           
      <details>
        <summary className='text-lg font-mono'>INFORMACI&Oacute;N BASICA</summary>
        <div className='flex flex-col gap-5'>
          
          

          <article className='flex gap-5'>
            <p>Inicial del nombre cientifico</p>
            <p>{plantToModify.scientistLastnameInitial}</p>
            <button className='border-2 border-black'>Modificar</button>
          </article>
          <article className='flex gap-5'>
            <p>Familia</p>
            <p>{plantToModify.family}</p>
            <button className='border-2 border-black'>Modificar</button>
          </article>
          <article className='flex gap-5'>
            <p>Estado</p>
            <p>{plantToModify.status}</p>
            <button className='border-2 border-black'>Modificar</button>
          </article>
          <article>
            <p>Classificaci&oacute;n</p>
            <ul>
              {plantToModify.classifications.map((classification, index) => (
                <li key={index}>{classification}</li>
              ))}
            </ul>
          </article>
          <button className='border-2 border-black'>Modificar</button>
        </div>
      </details>
      <details>
        <summary className='text-lg font-mono'>NOTAS</summary>
        <ul>
          {plantToModify.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </details> */}
      </section>
    </PlantToModifyProvider>
  );
};
const infoBaseSchema = object({
  commonName: string()
    .matches(/^(?!\s*$).+/, 'Nombre común obligatorio')
    .required('Nombre común requerido'),
  scientificName: string().default(''),
  scientistLastnameInitial: string().max(1, 'Max 1 letra').default(''),
  family: string().default(''),
  status: string().required(),
  classifications: array(string().required()).default([]),
});

type InfoBaseSchemaType = InferType<typeof infoBaseSchema>;

const SectionInfoBase = (infoBaseToModify: InfoBaseSchemaType) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InfoBaseSchemaType>({
    defaultValues: infoBaseToModify,
  });

  return (
    <>
      {/* <form className='bg-skin-form p-3 flex flex-col gap-5'>
        <DevTool />
      </form> */}
    </>
  );
};

interface InputFieldProps {
  textLabel: string;
  value: string | null;
}

const FieldInput = ({ textLabel, value }: InputFieldProps) => {
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <>
      <fieldset className='flex flex-col gap-1'>
        <label className='font-medium text-sm'>{textLabel}</label>
        <div className='flex gap-2 justify-between items-center'>
          <input
            defaultValue={value ? value : ''}
            className={`custom-input-form ${enableEdit && 'cursor-not-allowed text-gray-500'}`}
            readOnly={enableEdit}
            placeholder={value ? '' : 'sin valor'}
          />
          <EditButton isShow={enableEdit} action={() => setEnableEdit((prev) => !prev)} />
        </div>
      </fieldset>
    </>
  );
};

export default ModifyPlantPage;
