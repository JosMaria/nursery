import { BiSolidShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const plantsInfoSimple = [
  { id: 0, commonName: 'zero' },
  { id: 1, commonName: 'one' },
  { id: 2, commonName: 'two' },
];

const PlantListPage = () => {
  const isEmpty = false;

  return (
    <section className='flex flex-col items-center gap-2 select-none'>
      <h1 className='h1-custom text-center'>Listado Plantas</h1>
      {isEmpty ? (
        <p className='font-medium text-center text-lg'>No hay ninguna planta registrada</p>
      ) : (
        <ul className='bg-custom-medium flex flex-col gap-2 p-5 rounded'>
          {plantsInfoSimple.map((info) => (
            <li
              key={info.id}
              className='bg-custom-light w-72 py-1 px-3 flex justify-between items-center gap-2'
            >
              <p className='first-letter:uppercase text-sm max-xs:text-xs'>{info.commonName}</p>
              <Link
                className='bg-teal-700 hover:bg-teal-800 rounded text-white p-1.5 max-sm:p-1 border focus:ring focus:border-white focus:ring-teal-600 focus:outline-none'
                to='#'
              >
                <BiSolidShow />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PlantListPage;
