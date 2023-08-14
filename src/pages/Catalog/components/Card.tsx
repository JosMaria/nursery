import { Link } from 'react-router-dom';
import EmptyImage from '../../../assets/no-image.png';
import { StatusType } from '../../../types';

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
  <div className='flex flex-col gap-1 w-80 bg-stone-50 border border-stone-300 p-2 rounded-xl shadow-black shadow-sm hover:shadow-black hover:shadow-md'>
    <img src={EmptyImage} alt={commonName} />
    <Link key={id} className='cursor-pointer' to={`/products/${id}`}>
      <p className='font-bold text-lg first-letter:uppercase text-center'>
        {commonName}
      </p>
      <div className='grid grid-rows-3 text-sm px-2 pb-2 h-14'>
        <p className='italic'>
          {scientificName} {scientistSurnameInitial}
        </p>
        <p className=''>{family}</p>
        <p className='available-status place-self-end'>{status}</p>
      </div>
    </Link>
  </div>
);
