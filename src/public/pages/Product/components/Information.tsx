import { translateClassification, translateStatus } from '../../../utils';
import { useProductInformation } from '../hooks';

export const Information = () => {
  const productInfo = useProductInformation();

  return (
    <article className='w-full flex flex-col items-center gap-2 max-sm:text-xs p-2 max-md:pt-0'>
      <h1 className='text-2xl max-sm:text-xl font-medium first-letter:uppercase'>
        {productInfo.commonName}
      </h1>
      <div className='flex flex-col bg-custom-light rounded px-5 py-1'>
        <p className='flex gap-2'>
          <span className='font-medium'>Nombre Cientifico:</span>{' '}
          <i className='first-letter:uppercase'>
            {productInfo.scientificName} {productInfo.scientistLastnameInitial?.toUpperCase()}
          </i>
        </p>
        <p className='flex gap-2'>
          <span className='font-medium'>Familia:</span>{' '}
          <span className='first-letter:uppercase'>{productInfo.family}</span>
        </p>
        <p className='flex gap-2'>
          <span className='font-medium'>Estado:</span> {translateStatus(productInfo.status)}
        </p>
        <div className='flex gap-2'>
          <span className='font-medium'>Precio:</span>
          <p>
            {productInfo.price}<span>Bs</span>
          </p>
        </div>
        <div className='flex flex-col'>
          <p className='font-medium'>Classificaciones:</p>
          <ul className='self-center'>
            {productInfo.classifications.map((classification, index) => (
              <li key={index} className='list-inside list-disc'>
                {translateClassification(classification)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-start w-full'>
        <p className='font-medium'>DESCRIPCI&Oacute;N</p>
        <p className='bg-custom-light w-full h-full p-1'>{productInfo.description}</p>
      </div>
    </article>
  );
};
