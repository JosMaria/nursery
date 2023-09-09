import { CreateFamilyResponse } from '../types';

interface Props {
  families: CreateFamilyResponse[];
}

export const Families = ({ families }: Props) => (
  <article className='flex flex-col items-center gap-1 w-72'>
    <h2 className='font-medium'>Listado familias existentes</h2>
    <div className='bg-skin-light'>
      {families.length === 0 ? (
        <p className='font-semibold text-center overflow-y-hidden p-3 text-lg select-none'>
          No hay ninguna familia registrada
        </p>
      ) : (
        <li className='flex flex-col pl-4 py-1 max-h-56 overflow-y-scroll cursor-grab border-4 rounded-md border-skin-focus w-full'>
          {families.map((family) => (
            <ul key={family.id}>{family.name}</ul>
          ))}
        </li>
      )}
    </div>
  </article>
);
