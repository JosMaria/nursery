import { BsTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { CreateFamilyResponse } from '../types';
import { useState } from 'react';
import { EditModal } from '.';

interface Props {
  families: CreateFamilyResponse[];
}

export const List = ({ families }: Props) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(true);

  return (
    <article className='bg-skin-form rounded-xl flex flex-col items-center gap-5 w-80 text-sm p-2'>
      <h2 className='font-medium text-xl'>Listado familias</h2>
      {families.length === 0 ? (
        <ListEmpty />
      ) : (
        <ListWithItems showEditModal={() => setIsOpenEditModal(true)} families={families} />
      )}
      {isOpenEditModal && <EditModal close={() => setIsOpenEditModal(false)} />}
    </article>
  );
};

const ListEmpty = () => (
  <p className='bg-skin-light font-medium text-center overflow-y-hidden px-3 text-lg select-none'>
    No hay ninguna familia registrada
  </p>
);

interface ListWithItemProps {
  showEditModal: () => void;
}

const ListWithItems = ({ families, showEditModal }: Props & ListWithItemProps) => {
  const buttons = (
    <div className='flex gap-3'>
      <button onClick={showEditModal}>
        <BiEdit size='2em' className='bg-yellow-400 hover:bg-yellow-500 rounded-md p-0.5' />
      </button>
      <button>
        <BsTrashFill
          size='2em'
          className='bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-md'
        />
      </button>
    </div>
  );

  return (
    <li className='flex flex-col cursor-grab w-full bg-skin-light'>
      {families.map((family) => (
        <ul key={family.id} className='py-1.5 px-3 flex justify-between items-center gap-2'>
          <p>{family.name}</p>
          {buttons}
        </ul>
      ))}
    </li>
  );
};
