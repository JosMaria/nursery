import { BiSolidShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSimpleInfo } from '../hooks';

const ListView = () => {
  const { isEmpty, simpleInfo } = useSimpleInfo();

  return (
    <article className='w-full bg-skin-form rounded-xl flex flex-col items-center gap-3 text-sm p-2 h-fit'>
      <h2 className='font-medium text-xl'>Listado familias</h2>
      {isEmpty ? (
        <p className='bg-skin-light font-medium text-center px-3 text-lg select-none'>
          No hay ninguna planta registrada
        </p>
      ) : (
        <ul>
          {simpleInfo.map((info) => (
            <li
              key={info.id}
              className='bg-skin-light w-72 py-1.5 px-3 flex justify-between items-center gap-2'
            >
              <p className='first-letter:uppercase'>{info.commonName}</p>
              <Link
                className='bg-teal-700 hover:bg-teal-600 rounded-md text-white p-1.5 cursor-pointer focus:ring focus:ring-teal-500 focus:outline-none'
                to={`../${info.id}/modify`}
              >
                <BiSolidShow size='1.3em' />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ListView;
