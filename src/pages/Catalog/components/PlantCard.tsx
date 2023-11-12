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
    to={`product/${content.id}`}
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
);
