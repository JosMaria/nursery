import { Link } from 'react-router-dom';
import EmptyImage from '../../../assets/no-image.png';
import { StatusType } from '../../../types';
import { getStyledGivenStatus, traduceStatus } from '../../../utils';

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
    to='#'
    className='w-36 xs:w-40 sm:w-48 md:w-56 lg:w-60 xl:w-72 2xl:w-80 hover:shadow-xl hover:shadow-sky-950 flex flex-col gap-1 bg-custom-dark p-1 lg:p-1.5 rounded-md'
  >
    <img
      src='https://paisajismodigital.com/blog/wp-content/uploads/2020/08/plantas-carnivoras-ornamentales-paisajismo-digital-dionaea-muscipula.jpg'
      alt={content.commonName}
      className='h-28 xs:h-32 sm:h-40 md:h-44 lg:h-48 xl:h-56 2xl:h-60'
    />
    <div className='flex flex-col gap-1 text-sm max-lg:text-xs bg-custom-light px-2 max-md:px-1 py-1.5 max-md:py-1 max-xs:py-0.5'>
      <div className='flex flex-col whitespace-nowrap max-md:overflow-x-scroll'>
        <p className='text-center text-lg max-sm:text-sm max-lg:text-base font-medium first-letter:uppercase leading-none'>
          {content.commonName}
        </p>
        <p>
          <i>
            {content.scientificName} {content.scientistLastnameInitial}
          </i>
        </p>
        <p>{content.family}</p>
      </div>

      <p className='self-end font-medium text-xs bg-green-200 text-green-900 px-2 justify-self-end rounded-xl border-2 border-green-700'>
        {traduceStatus(content.status)}
      </p>
    </div>
  </Link>
);

/*
<Link
    to='#'
    className='bg-gradient-to-r from-card-start to-card-end shadow-black shadow-sm hover:shadow-black hover:shadow-xl p-1 flex flex-col gap-1 w-80 max-xl:w-72 max-md:w-60 max-sm:w-48 max-xs:w-40 text-center rounded-b-lg'
  >
    <img src={EmptyImage} alt={content.commonName} />
    <div className='h-24 max-xs:h-20 flex flex-col justify-evenly max-sm:text-sm px-2 max-sm:px-1'>
      <p className='font-medium max-sm:font-normal whitespace-nowrap overflow-x-auto overflow-y-hidden first-letter:uppercase'>
        {content.commonName}
      </p>
      <div className='flex flex-col items-start justify-between text-sm max-sm:text-xs max-xs:text-xs leading-none h-fit overflow-x-auto overflow-y-hidden whitespace-nowrap'>
        <p className='leading-none'>
          {content.scientificName} {content.scientistLastnameInitial}
        </p>
        <p className='leading-none'>{content.family}</p>
      </div>
      <p className={`${getStyledGivenStatus(content.status)} self-end w-fit`}>
        {traduceStatus(content.status)}
      </p>
    </div>
  </Link>
*/
