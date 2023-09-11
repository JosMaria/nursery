import { BsTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { CreateFamilyResponse } from '../types';

interface Props {
  families: CreateFamilyResponse[];
}

export const Table = ({ families }: Props) => (
  <article className='flex flex-col items-center gap-1 w-80 text-sm'>
    <h2 className='font-medium'>Listado familias existentes</h2>
    <div className='bg-skin-light w-full'>
      {families.length === 0 ? (
        <p className='font-semibold text-center overflow-y-hidden p-3 text-lg select-none'>
          No hay ninguna familia registrada
        </p>
      ) : (
        <li className='flex flex-col cursor-grab w-full'>
          {families.map((family) => (
            <ul key={family.id} className='py-1.5 px-3 even:bg-gray-100 odd:bg-gray-200 flex justify-between items-center'>
              <p>{family.name}</p>

              <div className='flex gap-3'>
                <button className='bg-yellow-500 p-1 rounded-md'>
                  <BiEdit size='1.5em' />
                </button>
                <button className='bg-red-600 text-white p-2 rounded-md'>
                  <BsTrashFill />
                </button>
              </div>
            </ul>
          ))}
        </li>
      )}
    </div>
  </article>
);
