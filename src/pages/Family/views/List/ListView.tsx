import { useFamilies } from '../../hooks';
import { useState } from 'react';
import { DeleteModal, EditButton, TrashButton, EditForm } from '../../components';

const ListView = () => {
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
        <Item key={family.id} id={family.id} name={family.name} />
      ))}
    </ul>
  );
};

interface ItemProps {
  id: number;
  name: string;
}
const Item = ({ id, name }: ItemProps) => {
  const [showFormEdit, setShowFormEdit] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <li className='w-72 py-1.5 px-3 flex justify-between items-center gap-2'>
        <p>{name}</p>
        <div className='flex gap-3'>
          <EditButton isShow={showFormEdit} action={() => setShowFormEdit((prev) => !prev)} />
          <TrashButton action={() => setShowDeleteModal(true)} />
        </div>
      </li>
      <EditForm
        familyId={id}
        isShow={showFormEdit}
        close={() => setShowFormEdit(false)}
        actualName={name}
      />
      {showDeleteModal && (
        <DeleteModal familyId={id} familyName={name} close={() => setShowDeleteModal(false)} />
      )}
    </>
  );
};

export default ListView;
