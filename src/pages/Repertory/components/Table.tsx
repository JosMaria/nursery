import { getStyledGivenStatus, traduceStatus } from '../../../utils';
import { ItemResponse } from '../types';

interface Props {
  items: ItemResponse[];
}

export const Table = ({ items }: Props) => {
  return (
    <div className='w-screen overflow-x-scroll p-3 grid'>
      <table className='place-self-center'>
        <TableHeader />
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className='text-sm max-sm:text-xs bg-stone-50 [&:nth-child(even)]:bg-stone-200'
            >
              <td className='p-2 first-letter:uppercase'>{item.commonName}</td>
              <td className='p-2 first-letter:uppercase italic'>
                {item.scientificName}{' '}
                {item.scientistLastnameInitial?.toUpperCase()}
              </td>
              <td className='p-2 first-letter:uppercase'>{item.family}</td>
              <td className='p-2 first-letter:uppercase flex justify-center'>
                <p className={getStyledGivenStatus(item.status)}>
                  {traduceStatus(item.status)}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHeader = () => (
  <thead className='bg-skin-dark text-skin-light whitespace-nowrap text-sm max-sm:text-xs'>
    <tr>
      {['Nombre Comun', 'Nombre Cientifico', 'Familia', 'Estado'].map(
        (title, index) => (
          <th key={index} className='py-3 px-10 max-sm:px-7'>
            {title}
          </th>
        )
      )}
    </tr>
  </thead>
);
