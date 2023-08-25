import { getStyledGivenStatus, traduceStatus } from '../../../utils';
import { data as ITEMS } from '../data/store';

const HEADERS_TITLE = [
  'Nombre Comun',
  'Nombre Cientifico',
  'Familia',
  'Estado',
];

export const Table = () => {
  const tableHeader = (
    <thead className='bg-skin-dark text-skin-light whitespace-nowrap text-sm max-sm:text-xs'>
      <tr>
        {HEADERS_TITLE.map((title, index) => (
          <th key={index} className='py-3 px-10 max-sm:px-7'>
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {ITEMS.content.map((item) => (
        <tr
          key={item.id}
          className='text-sm max-sm:text-xs bg-stone-50 [&:nth-child(even)]:bg-stone-300'
        >
          <td className='p-2 first-letter:uppercase'>{item.commonName}</td>
          <td className='p-2 first-letter:uppercase italic'>
            {item.scientificName} {item.scientistSurnameInitial?.toUpperCase()}
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
  );

  return (
    <div className='w-screen overflow-x-scroll p-4 grid'>
      <table className='place-self-center'>
        {tableHeader}
        {tableBody}
      </table>
    </div>
  );
};
