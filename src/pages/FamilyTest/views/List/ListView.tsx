import { BsTrashFill } from 'react-icons/bs';
import { useFamilies } from '../../hooks';
import { BiEdit } from 'react-icons/bi';

export const ListView = () => {
  const { isEmpty } = useFamilies();

  return (
    <article className='w-full bg-skin-form rounded-xl flex flex-col items-center gap-3 text-sm p-2 h-fit'>
      <h2 className='font-medium text-xl'>Listado familias</h2>
      {isEmpty ? (
        <p className='bg-skin-light font-medium text-center px-3 text-lg select-none'>
          No hay ninguna familia registrada
        </p>
      ) : (
        <ListWithItems />
      )}
    </article>
  );
};

const ListWithItems = () => {
  const { families } = useFamilies();

  return (
    <ul className='flex flex-col cursor-grab bg-skin-light'>
      {families.map((family) => (
        <li key={family.id} className='py-1.5 px-3 flex justify-between items-center gap-2 w-72'>
          <p>{family.name}</p>
          <div className='flex gap-3'>
            <ButtonIconEdit />
            <ButtonIconTrash />
          </div>
        </li>
      ))}
    </ul>
  );
};

const ButtonIconTrash = () => (
  <button className='focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5'>
    <BsTrashFill size='1em' />
  </button>
);

const ButtonIconEdit = () => (
  <button className='bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded p-1'>
    <BiEdit size='1.4em' />
  </button>
);
