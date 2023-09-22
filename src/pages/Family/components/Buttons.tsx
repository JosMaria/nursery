import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { BsTrashFill } from 'react-icons/bs';
import { DeleteFamilyModal, EditFamilyModal } from '.';

export const ButtonIconTrash = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className='focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5'
      >
        <BsTrashFill size='1em' />
      </button>
      {showModal && <DeleteFamilyModal close={() => setShowModal(false)} />}
    </>
  );
};

export const ButtonIconEdit = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className='bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded p-1'
      >
        <BiEdit size='1.4em' />
      </button>
      {showModal && <EditFamilyModal close={() => setShowModal(false)} />}
    </>
  );
};
