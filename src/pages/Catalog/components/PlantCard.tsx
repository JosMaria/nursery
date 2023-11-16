import { Link } from 'react-router-dom';
import EmptyImage from '../../../assets/no-image.png';
import { StatusType } from '../../../types';
import { traduceStatus } from '../../../utils';

interface PlantCardProps {
  content: {
    id: number;
    commonName: string;
    scientificName: string;
    scientistLastnameInitial: string;
    family: string;
    status: StatusType;
  };
}

export const PlantCard = ({ content }: PlantCardProps) => (
  <Link
    className='w-36 xs:w-40 sm:w-48 md:w-56 lg:w-60 xl:w-72 2xl:w-80 hover:shadow-xl hover:shadow-custom flex flex-col gap-1 bg-custom-dark p-1 lg:p-1.5 rounded-md'
    to='#'
  >
    <img
      className='h-28 xs:h-32 sm:h-40 md:h-44 lg:h-48 xl:h-56 2xl:h-60'
      src='https://paisajismodigital.com/blog/wp-content/uploads/2020/08/plantas-carnivoras-ornamentales-paisajismo-digital-dionaea-muscipula.jpg'
      alt={content.commonName}
    />
    <div className='m-0 flex flex-col gap-1 text-sm max-lg:text-xs bg-custom-light px-2 max-md:px-1 py-1.5 max-md:py-1 max-xs:py-0.5'>
      <div className='flex flex-col whitespace-nowrap max-md:overflow-x-scroll'>
        <p className='text-center text-lg max-sm:text-sm max-lg:text-base font-medium first-letter:uppercase leading-none'>
          {content.commonName}
        </p>
        <p className=''>
          <i>
            {content.scientificName} {content.scientistLastnameInitial}
          </i>
        </p>
        <p>{content.family}</p>
      </div>

      <p className={`${styleGivenStatus(content.status)} self-end`}>
        {traduceStatus(content.status).toLowerCase()}
      </p>
    </div>
  </Link>
);

const styleGivenStatus = (status: StatusType): string => {
  const styleGeneral = 'px-1.5 rounded-lg font-medium text-xs border-2';

  if (status === 'AVAILABLE') {
    return `${styleGeneral} bg-green-200 text-green-800 border-green-800`;
  } else if (status === 'NON_EXISTENT') {
    return `${styleGeneral} bg-purple-200 text-purple-800 border-purple-800`;
  } else if (status === 'IN_CONSERVATION') {
    return `${styleGeneral} bg-amber-200 text-amber-800 border-amber-800`;
  } else return '';
};
