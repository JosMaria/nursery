import { CreateFamilyResponse } from '../types';

interface Props {
  families: CreateFamilyResponse[];
}

export const Families = ({ families }: Props) => (
  <article className='flex flex-col items-start gap-1 w-72'>
    <h2 className='font-medium'>Listado familias existentes</h2>
    <li className='bg-skin-light flex flex-col pl-4 py-1 max-h-56 overflow-y-scroll cursor-grab border-4 rounded-md border-skin-focus w-full'>
      {families.map((family) => (
        <ul key={family.id}>{family.name}</ul>
      ))}
    </li>
  </article>
);
