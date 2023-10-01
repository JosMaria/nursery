import { BsTrashFill } from 'react-icons/bs';
import { useFamilies } from '../../hooks';
import { BiEdit } from 'react-icons/bi';
import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';

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
        <Item key={family.id} name={family.name} />
      ))}
    </ul>
  );
};

interface ItemProps {
  name: string;
}
const Item = ({ name }: ItemProps) => {
  const [showFormEdit, setShowFormEdit] = useState(false);
  return (
    <>
      <li className='w-72 py-1.5 px-3 flex justify-between items-center gap-2'>
        <p>{name}</p>
        <div className='flex gap-3'>
          <ButtonIconEdit isShow={showFormEdit} action={() => setShowFormEdit((prev) => !prev)} />
          <ButtonIconTrash />
        </div>
      </li>
      <p className={`${!showFormEdit && 'hidden'}`}>Nuevo nombre</p>
    </>
  );
};

const ButtonIconTrash = () => (
  <button className='focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-500 hover:bg-red-600 text-white rounded p-1.5'>
    <BsTrashFill size='1em' />
  </button>
);

interface ButtonIconEditProps {
  isShow: boolean;
  action?: () => void;
}

const ButtonIconEdit = ({ isShow, action }: ButtonIconEditProps) => (
  <button
    className={`bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-200 rounded p-1 ${
      isShow && 'opacity-80'
    }`}
    onClick={action}
  >
    <BiEdit size='1.4em' />
  </button>
);

/*
onSubmit={handleSubmit((data) => {
          updateFamily(data.newName);
          close();
        })}
*/

const EditFamilyModal = () => (
  <dialog className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-xl flex justify-center items-center select-none w-full h-screen text-skin-dark'>
    <form className=' bg-skin-light p-4 rounded flex flex-col justify-center items-center gap-5 relative'>
      <button
        onClick={close}
        className='absolute right-0.5 top-0.5 cursor-pointer bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-400 text-white font-bold text-lg leading-none px-1 rounded'
      >
        &times;
      </button>
      <h2 className='font-medium text-base'>Introduzca nuevo nombre</h2>
      <div className='flex flex-col gap-1'>
        <input
          type='text'
          className='custom-input-form'
          //placeholder={oldName}
          autoComplete='off'
          //{...register('newName')}
        />
        {/* <p className='custom-lbl-form-error'>{errors.newName?.message}</p> */}
      </div>
      <button className='custom-btn-form' type='submit'>
        Cambiar
      </button>
    </form>
  </dialog>
);
