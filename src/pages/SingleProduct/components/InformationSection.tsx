import { traduceStatus } from '../../../utils';
import { useInfoBase } from '../hooks';

export const InformationSection = () => {
  const {
    commonName,
    scientificName,
    scientistLastnameInitial,
    family,
    status,
    classifications,
    description,
  } = useInfoBase();

  return (
    <article className='max-w-xl w-full flex flex-col items-center gap-5 text-sm max-sm:text-xs bg-skin-form px-4 py-2 h-fit self-start'>
      <h1 className='text-2xl max-sm:text-xl font-medium first-letter:uppercase'>{commonName}</h1>
      <div className='grid grid-cols-2 gap-y-1'>
        <p className='font-medium'>Nombre Cientifico:</p>
        <p className='first-letter:uppercase'>
          <i>
            {scientificName}&nbsp;<span className='uppercase'>{scientistLastnameInitial}</span>
          </i>
        </p>

        <p className='font-medium'>Familia:</p>
        <p className='first-letter:uppercase'>{family}</p>

        <p className='font-medium'>Estado:</p>
        <p>{traduceStatus(status)}</p>

        <p className='font-medium'>Classificaciones:</p>
        <ul>
          {classifications.map((classification, index) => (
            <li key={index}>{classification}</li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col items-start w-full'>
        <p className='font-medium tracking-wide'>DESCRIPCI&Oacute;N</p>
        <p>{description}</p>
      </div>
    </article>
  );
};
