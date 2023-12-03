import { StatusType } from '../../../types';
import { traduceStatus } from '../../../utils';

const commonName = 'flor de verano';
const scientificName = 'flor de verano';
const scientistLastnameInitial: string | null = 'l';
const family = 'euphorbiaceae';
const status: StatusType = 'AVAILABLE';
const classifications = ['ORNAMENTAL', 'FRUTAL'];
const description = 'Esta el la descripción';

export const Information = () => {
  return (
    <article className='col-span-3 max-w-lg w-full flex flex-col items-center gap-1 max-sm:text-xs p-2 h-fit'>
      <h1 className='text-2xl max-sm:text-xl font-medium first-letter:uppercase'>{commonName}</h1>
      <div className='flex flex-col bg-custom-light rounded px-5 py-1'>
        <p className='flex gap-2'>
          <span className='font-medium'>Nombre Cientifico:</span>{' '}
          <i className='first-letter:uppercase'>
            {scientificName} {scientistLastnameInitial?.toUpperCase()}
          </i>
        </p>
        <p className='flex gap-2'>
          <span className='font-medium'>Familia:</span> <span className='first-letter:uppercase'>{family}</span>
        </p>
        <p className='flex gap-2'>
          <span className='font-medium'>Estado:</span> {traduceStatus(status)}
        </p>
        <div className='flex flex-col'>
          <p className='font-medium'>Classificaciones:</p>
          <ul className='self-center'>
            {classifications.map((classification, index) => (
              <li key={index} className='list-inside list-disc'>
                {classification}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-start w-full'>
        <p className='font-medium'>DESCRIPCI&Oacute;N</p>
        <p className='bg-custom-light w-full h-full p-1'>{description}</p>
      </div>
    </article>
  );
};
