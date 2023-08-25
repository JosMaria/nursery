import { Link } from 'react-router-dom';
import EmptyImage from '../../../assets/no-image.png';
import { StatusType } from '../../../types';
import { getStyledGivenStatus, traduceStatus } from '../../../utils';

interface Props {
  id: number;
  commonName: string;
  scientificName: string | null;
  scientistSurnameInitial: string | null;
  family: string | null;
  status: StatusType;
}

export const Card = ({
  id,
  commonName,
  scientificName,
  scientistSurnameInitial,
  family,
  status,
}: Props) => (
  <Link
    to={`products/${id}`}
    className='bg-gradient-to-r from-card-start to-card-end shadow-black shadow-sm hover:shadow-black hover:shadow-xl p-1 flex flex-col gap-1 w-80 max-xl:w-72 max-md:w-60 max-sm:w-48 max-xs:w-40 text-center rounded-b-lg'
  >
    <div>
      <img src={EmptyImage} alt={commonName} />
    </div>
    <div className='h-24 max-xs:h-20 flex flex-col justify-evenly max-sm:text-sm px-2 max-sm:px-1'>
      <p className='font-medium max-sm:font-normal whitespace-nowrap overflow-x-auto overflow-y-hidden first-letter:uppercase'>
        {commonName}
      </p>
      <div className='flex flex-col items-start justify-between text-sm max-sm:text-xs max-xs:text-xs leading-none h-fit overflow-x-auto overflow-y-hidden whitespace-nowrap'>
        <p className='leading-none'>
          {scientificName} {scientistSurnameInitial}
        </p>
        <p className='leading-none'>{family}</p>
      </div>
      <p className={`${getStyledGivenStatus(status)} self-end w-fit`}>
        {traduceStatus(status)}
      </p>
    </div>
  </Link>
);
