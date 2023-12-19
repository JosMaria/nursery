import { useRepertoryItems } from '../hooks';

export const Table = () => {
  const { content: items } = useRepertoryItems();

  return (
    <table className='min-w-[28rem] w-full whitespace-nowrap'>
      <thead className='bg-custom-dark text-custom-light whitespace-nowrap text-sm max-sm:text-xs'>
        <tr>
          <th className='py-2'>ID</th>
          <th className='py-2'>Nombre Comun</th>
          <th className='py-2'>Nombre Cientifico</th>
          <th className='py-2'>Familia</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            className='text-sm max-sm:text-xs odd:bg-slate-100 even:bg-slate-200 text-center'
          >
            <td className='p-1.5'>{item.id}</td>
            <td className='p-1.5 first-letter:uppercase'>{item.commonName}</td>
            <td className='p-1.5 first-letter:uppercase italic'>
              {item.scientificName} {item.scientistLastnameInitial?.toUpperCase()}
            </td>
            <td className='p-1.5 first-letter:uppercase'>{item.family}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
