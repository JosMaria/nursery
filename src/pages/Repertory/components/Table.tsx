import { data as ITEMS } from '../data/store';

const HEADERS_TITLE = [
  'Nombre Comun',
  'Nombre Cientifico',
  'Familia',
  'Estado',
];

export const Table = () => {
  const cellStyled = 'p-2 first-letter:uppercase';

  const tableHeader = (
    <thead className='bg-color-mark font-medium whitespace-nowrap'>
      <tr>
        {HEADERS_TITLE.map((title, index) => (
          <th key={index} className='p-4 text-sm'>
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
          <td className={cellStyled}>{item.commonName}</td>
          <td className={`${cellStyled} italic`}>
            {item.scientificName} {item.scientistSurnameInitial?.toUpperCase()}
          </td>
          <td className={cellStyled}>{item.family}</td>
          <td className={cellStyled}>{item.status}</td>
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
