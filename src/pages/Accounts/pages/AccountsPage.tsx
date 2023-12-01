import { BiSolidShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchAllAccounts } from '../services';

const AccountsPage = () => {
  const { data: accounts, status } = useQuery({
    queryKey: ['accounts'],
    queryFn: fetchAllAccounts,
  });

  if (status === 'loading') return <p>cargando usuarios</p>;
  if (status === 'error') return <p>error al cargar usuarios</p>;

  return (
    <section className='flex flex-col items-center gap-3 w-full px-1'>
      <h1 className='h1-custom text-center'>Cuentas de Administradores y Asistentes</h1>
      <article className='max-w-3xl w-full max-sm:overflow-x-scroll'>
        <table className='min-w-3xl w-full whitespace-nowrap'>
          <thead>
            <tr className='bg-custom-dark text-custom-light'>
              <th className='py-2 px-4 font-medium max-sm:text-sm'>Nombre</th>
              <th className='py-2 px-4 font-medium max-sm:text-sm'>Apellido</th>
              <th className='py-2 px-4 font-medium max-sm:text-sm'>Usuario</th>
              <th className='py-2 px-4 font-medium max-sm:text-sm'>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr
                key={account.id}
                className='text-center max-sm:text-sm even:bg-slate-200 bg-slate-50 whitespace-nowrap'
              >
                <td className='py-1 px-3'>{account.name}</td>
                <td className='py-1 px-3'>{account.lastname}</td>
                <td className='py-1 px-3'>{account.username}</td>
                <td className='py-1 px-3'>{account.role}</td>
                <td className='px-1 py-1 flex justify-center'>
                  <Link
                    className='bg-teal-700 hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:outline-none rounded-md text-white px-1.5 py-1'
                    to='/'
                  >
                    <BiSolidShow size='1.1em' />
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

export default AccountsPage;
