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
  <div className='max-lg:w-40 max-lg:h-52 flex flex-col p-2 rounded-xl bg-stone-50 border border-stone-300 shadow-black shadow-sm hover:shadow-black hover:shadow-md'>
    <img src={EmptyImage} alt={commonName} />
    <Link key={id} className='cursor-pointer' to={`/products/${id}`}>
      <p className='font-bold max-sm:text-sm text-lg first-letter:uppercase text-center'>
        {commonName}
      </p>
      <div className='grid grid-rows-3 text-xs max- px-2 pb-2 whitespace-nowrap overflow-x-auto'>
        <p className='italic'>
          {scientificName} {scientistSurnameInitial}
        </p>
        <p className=''>{family}</p>
        <p className={`${getStyledGivenStatus(status)} place-self-end`}>{traduceStatus(status)}</p>
      </div>
    </Link>
  </div>
);
