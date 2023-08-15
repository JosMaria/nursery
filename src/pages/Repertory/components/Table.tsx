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
    <thead className='table-header'>
      <tr>
        {HEADERS_TITLE.map((title, index) => (
          <th key={index} className='py-4 px-10 text-sm'>
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
          className='text-sm bg-stone-50 [&:nth-child(even)]:bg-stone-300'
        >
          <td className='custom-row'>{item.commonName}</td>
          <td className='custom-row italic'>
            {item.scientificName} {item.scientistSurnameInitial?.toUpperCase()}
          </td>
          <td className='custom-row'>{item.family}</td>
          <td className='custom-row flex justify-center'>
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
