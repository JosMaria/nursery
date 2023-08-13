import { StatusType } from '../../../types';
import { data as ITEMS } from '../data/store';

const HEADERS_TITLE = [
  'Nombre Comun',
  'Nombre Cientifico',
  'Familia',
  'Estado',
];

const statusToSpanish = (status: StatusType): string => {
  if (status === 'IN_CONSERVATION') {
    return 'EN CONSERVACIÓN';
  } else if (status === 'AVAILABLE') {
    return 'DISPONIBLE';
  } else {
    return 'NO EXISTENTE';
  }
};

const getStyledBy = (status: StatusType): string => {
  if (status === 'IN_CONSERVATION') {
    return 'conservation-status';
  } else if (status === 'AVAILABLE') {
    return 'available-status';
  } else {
    return 'non-existent-status';
  }
};

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
          className='text-sm bg-stone-200 [&:nth-child(even)]:bg-stone-100'
        >
          <td className='custom-row'>{item.commonName}</td>
          <td className='custom-row italic'>
            {item.scientificName} {item.scientistSurnameInitial?.toUpperCase()}
          </td>
          <td className='custom-row'>{item.family}</td>
          <td className='custom-row flex justify-center'>
            <p className={`${getStyledBy(item.status)} font-medium text-xs px-3 rounded-full`}>
              {statusToSpanish(item.status)}
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
