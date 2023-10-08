import { BiSolidShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSimpleInfo } from '../hooks';

const ListPlantView = () => {
  const { isEmpty } = useSimpleInfo();

  return (
    <article className='w-full bg-skin-form rounded-xl flex flex-col items-center gap-3 text-sm p-4 h-fit'>
      <h2 className='font-medium text-xl max-sm:text-base'>Listado Plantas</h2>
      {isEmpty ? <ListWithoutPlants /> : <ListWithPlants />}
    </article>
  );
};

const ListWithoutPlants = () => (
  <p className='bg-skin-light font-medium text-center px-3 text-lg select-none'>
    No hay ninguna planta registrada
  </p>
);

const ListWithPlants = () => {
  const { simpleInfo } = useSimpleInfo();

  return (
    <ul>
      {simpleInfo.map((info) => (
        <li
          key={info.id}
          className='bg-skin-light w-72 py-1.5 px-3 flex justify-between items-center gap-2'
        >
          <div className='flex gap-4 max-sm:text-xs'>
            <p>{info.id}</p>
            <p className='first-letter:uppercase'>{info.commonName}</p>
          </div>
          <Link
            className='bg-teal-700 hover:bg-teal-600 rounded-md text-white p-1.5 max-sm:p-1 cursor-pointer focus:ring focus:ring-teal-500 focus:outline-none'
            to={`/setting/plant/${info.id}`}
          >
            <BiSolidShow size='1.2em' />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListPlantView;
