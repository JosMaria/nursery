import { BiSolidShow } from 'react-icons/bi';
import { AccountResponse } from '../../types';
import { Link } from 'react-router-dom';

const accounts: AccountResponse[] = [
  {
    id: 1,
    name: 'Jose Maria',
    lastname: 'Aguilar Chambi',
    username: 'josmaria',
    role: 'ADMINISTRATOR',
  },
  {
    id: 2,
    name: 'Consuelo',
    lastname: 'Diaz Quisbeth',
    username: 'consuelo',
    role: 'ADMINISTRATOR',
  },
  {
    id: 1,
    name: 'Nicole Genesis',
    lastname: 'Bustamante',
    username: 'nico',
    role: 'ASSISTANT',
  },
];

const AccountListPage = () => {
  // const { data: accounts, status } = useQuery({
  //   queryKey: ['accounts'],
  //   queryFn: fetchAllAccounts,
  // });

  // if (status === 'pending') return <p>cargando usuarios</p>;
  // if (status === 'error') return <p>error al cargar usuarios</p>;

  return (
    <section className='flex flex-col items-center gap-3 w-full'>
      <h1 className='h1-custom text-center'>Cuentas de Administradores y Asistentes</h1>
      <article className='max-w-3xl w-screen max-sm:overflow-x-scroll px-1'>
        <table className='w-full whitespace-nowrap'>
          <thead>
            <tr className='bg-custom-dark text-custom-light'>
              <th className='py-1.5 px-3 max-sm:text-sm'>Nombre</th>
              <th className='py-1.5 px-3 max-sm:text-sm'>Apellido</th>
              <th className='py-1.5 px-3 max-sm:text-sm'>Usuario</th>
              <th className='py-1.5 px-3 max-sm:text-sm'>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr
                key={account.id}
                className='text-center max-sm:text-sm even:bg-slate-50 bg-custom-light whitespace-nowrap'
              >
                <td className='py-1 px-2'>{account.name}</td>
                <td className='py-1 px-2'>{account.lastname}</td>
                <td className='py-1 px-2'>{account.username}</td>
                <td className='py-1 px-2'>{account.role}</td>
                <td className='py-1 flex justify-center'>
                  <Link
                    className='bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 rounded border p-1'
                    to='/'
                  >
                    <BiSolidShow size='1.1em' color='white' />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
};
export default AccountListPage;
