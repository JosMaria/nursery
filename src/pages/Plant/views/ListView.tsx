import { useQuery } from '@tanstack/react-query';
import { fetchAllCommonNamesPlants } from '../services';
import { BiSolidShow } from 'react-icons/bi';

const ListView = () => {
  const { data: commonNames, status } = useQuery({
    queryKey: ['common-names'],
    queryFn: fetchAllCommonNamesPlants,
    refetchOnWindowFocus: false
  });

  if (status === 'loading') return 'loading common names';
  if (status === 'error') return 'error common names';

  return (
    <article className='w-full bg-skin-form rounded-xl flex flex-col items-center gap-3 text-sm p-2 h-fit'>
      <h2 className='font-medium text-xl'>Listado familias</h2>
      {commonNames.length === 0 ? (
        <p className='bg-skin-light font-medium text-center px-3 text-lg select-none'>
          No hay ninguna planta registrada
        </p>
      ) : (
        <ul>
          {commonNames.map((info) => (
            <li
              key={info.id}
              className='bg-skin-light w-72 py-1.5 px-3 flex justify-between items-center gap-2'
            >
              <p className='first-letter:uppercase'>{info.commonName}</p>
              <button className='bg-teal-700 hover:bg-teal-600 rounded-md text-white p-1.5 cursor-pointer focus:ring focus:ring-teal-500 focus:outline-none'>
                <BiSolidShow
                  
                  size='1.3em'
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ListView;
