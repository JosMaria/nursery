import { FamilyResponse } from '../types';
import { FamilyProvider } from '../context/provider';
import { ButtonIconEdit, ButtonIconTrash } from '.';
import { useFamiliesContext } from '../context';

export const List = () => {
  const { families } = useFamiliesContext();

  return (
    <article className='bg-skin-form rounded-xl flex flex-col items-center gap-3 w-80 text-sm p-2 h-fit'>
      <h2 className='font-medium text-xl'>Listado familias</h2>
      {families.length === 0 ? <ListEmpty /> : <ListWithItems families={families} />}
    </article>
  );
};

const ListEmpty = () => (
  <p className='bg-skin-light font-medium text-center px-3 text-lg select-none'>
    No hay ninguna familia registrada
  </p>
);

interface ListWithItemsProps {
  families: FamilyResponse[];
}

const ListWithItems = ({ families }: ListWithItemsProps) => {
  return (
    <ul className='flex flex-col cursor-grab w-full bg-skin-light'>
      {families.map((family) => (
        <li key={family.id} className='py-1.5 px-3 flex justify-between items-center gap-2'>
          <p>{family.name}</p>
          <FamilyProvider id={family.id} name={family.name}>
            <div className='flex gap-3'>
              <ButtonIconEdit />
              <ButtonIconTrash />
            </div>
          </FamilyProvider>
        </li>
      ))}
    </ul>
  );
};
