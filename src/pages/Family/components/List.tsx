import { BsTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { CreateFamilyResponse } from '../types';
import { useState } from 'react';
import { DeleteModal } from '.';

interface Props {
  families: CreateFamilyResponse[];
}

export const List = ({ families }: Props) => {
  return (
    <article className='bg-skin-form rounded-xl flex flex-col items-center gap-5 w-80 text-sm p-2'>
      <h2 className='font-medium text-xl'>Listado familias</h2>
      {families.length === 0 ? <ListEmpty /> : <ListWithItems families={families} />}
    </article>
  );
};

const ListEmpty = () => (
  <p className='bg-skin-light font-medium text-center overflow-y-hidden px-3 text-lg select-none'>
    No hay ninguna familia registrada
  </p>
);

interface ListWithItemProps {}

const ListWithItems = ({ families }: Props & ListWithItemProps) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const closeDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  return (
    <li className='flex flex-col cursor-grab w-full bg-skin-light'>
      {families.map((family) => (
        <ul key={family.id} className='py-1.5 px-3 flex justify-between items-center gap-2'>
          <p>{family.name}</p>
          <div className='flex gap-3'>
            {/* <button onClick={}>
              <BiEdit size='2em' className='bg-yellow-400 hover:bg-yellow-500 rounded-md p-0.5' />
            </button> */}
            <button onClick={() => setIsOpenDeleteModal(true)}>
              <BsTrashFill
                size='2em'
                className='bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-md'
              />
            </button>
          </div>
          {isOpenDeleteModal && <DeleteModal close={closeDeleteModal} familyId={family.id} />}
        </ul>
      ))}
    </li>
  );
};
