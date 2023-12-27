import { getStyleForStatus, translateStatus } from '../utils';
import { ProductResponseType } from '../types/catalogTypes';
import { Link } from 'react-router-dom';

type Props = {
  content: Omit<ProductResponseType, 'photo_URL'>;
};

export const PlantCard = ({ content }: Props) => (
  <Link
    className='w-36 xs:w-48 sm:w-60 lg:w-72 xl:w-80 2xl:w-96 focus:outline-none focus:shadow-2xl focus:shadow-custom hover:shadow-2xl hover:shadow-custom flex flex-col gap-1 bg-custom-dark p-1 lg:p-1.5 2xl:p-2 rounded'
    to={`product/${content.id}`}
  >
    <img
      className='h-28 xs:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72'
      src='https://paisajismodigital.com/blog/wp-content/uploads/2020/08/plantas-carnivoras-ornamentales-paisajismo-digital-dionaea-muscipula.jpg'
      alt={content.commonName}
      loading='lazy'
    />
    <div className='flex flex-col text-sm max-lg:text-xs bg-custom-light px-2 max-md:px-1 py-1.5 max-md:py-1 max-xs:py-0.5'>
      <div className='leading-tight flex flex-col whitespace-nowrap max-md:overflow-x-scroll'>
        <p className='md:pb-1 text-center text-lg max-sm:text-sm max-lg:text-base font-medium first-letter:uppercase leading-none'>
          {content.commonName}
        </p>
        <p>
          <i>
            {content.scientificName} {content.scientistLastnameInitial}
          </i>
        </p>
        <p>{content.family}</p>
      </div>
      <p className={`${getStyleForStatus(content.status)} self-end`}>
        {translateStatus(content.status)}
      </p>
    </div>
  </Link>
);
