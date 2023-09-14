import { BsTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { CreateFamilyResponse } from '../types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteFamilyById, fetchAllFamilies } from '../service';
import { toast } from 'react-hot-toast';
import { ErrorType } from '../../../types';
import { HttpStatusCode } from 'axios';

export const List = () => {
  const { data: families } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
    initialData: [],
    cacheTime: 3000,
  });

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

interface ListWithItemsProps {
  families: CreateFamilyResponse[];
}

const ListWithItems = ({ families }: ListWithItemsProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteFamily } = useMutation({
    mutationFn: (data: { id: number; name: string }) => deleteFamilyById(data.id),
    onSuccess: (_, variables) => {
      toast.success('Familia: ' + variables.name);
      queryClient.invalidateQueries({ queryKey: ['families'] });
    },
    onError(error: ErrorType) {
      const { response } = error;
      if (response.status === HttpStatusCode.BadRequest) {
        toast.error(response.data.reason, { className: 'custom-toast-error' });
      }
    },
  });

  return (
    <ul className='flex flex-col cursor-grab w-full bg-skin-light'>
      {families.map((family) => (
        <li key={family.id} className='py-1.5 px-3 flex justify-between items-center gap-2'>
          <p>{family.name}</p>
          <div className='flex gap-3'>
            <button>
              <BiEdit size='2em' className='bg-yellow-400 hover:bg-yellow-500 rounded-md p-0.5' />
            </button>
            <button onClick={() => deleteFamily({ id: family.id, name: family.name })}>
              <BsTrashFill
                size='2em'
                className='bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-md'
              />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
