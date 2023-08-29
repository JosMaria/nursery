import { PlantClassificationType, StatusType } from '../../../types';

interface Props {
  commonName: string;
  scientificName: string | null;
  scientistLastnameInitial: string | null;
  family: string | null;
  status: StatusType;
  classifications: PlantClassificationType[];
  description: string | null;
}

export const InformationSection = ({
  commonName,
  scientificName,
  scientistLastnameInitial,
  family,
  status,
  classifications,
  description,
}: Props) => (
  <article className='max-w-2xl w-full flex flex-col items-center gap-5 text-sm max-sm:text-xs bg-skin-form px-4 py-2'>
    <h1 className='text-2xl font-medium'>{commonName}</h1>
    <div className='grid grid-cols-2 gap-y-1'>
      <p className='font-medium'>Nombre Cientifico:</p>
      <p>
        {scientificName}&nbsp;{scientistLastnameInitial}
      </p>

      <p className='font-medium'>Familia:</p>
      <p>
        <i>{family}</i>
      </p>

      <p className='font-medium'>Estado:</p>
      <p>{status}</p>

      <p className='font-medium'>Classificaciones:</p>
      <ul>
        {classifications.map((classification, index) => (
          <li key={index}>{classification}</li>
        ))}
      </ul>
    </div>

    <div className='flex flex-col gap-2'>
      <p className='font-medium tracking-wide'>DESCRIPCION</p>
      <p>{description}</p>
    </div>
  </article>
);
