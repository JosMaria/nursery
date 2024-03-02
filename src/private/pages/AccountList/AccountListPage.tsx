import { fetchAllAccounts } from './service/service';
import { useQuery } from '@tanstack/react-query';
import { translateRole } from '../../../utils';
import { BiSolidShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AccountListPage = () => {
  const { data: accounts, status } = useQuery({
    queryKey: ['accounts'],
    queryFn: fetchAllAccounts,
  });

  return (
    <section className='flex flex-col items-center gap-3 w-full'>
      <h1 className='h1-custom text-center'>Cuentas de Administradores y Asistentes</h1>
      <article className='max-w-3xl w-screen max-sm:overflow-x-scroll px-1'>
        {status === 'pending' && <p>Obteniendo cuentas</p>}
        {status === 'error' && <p>Obteniendo cuentas</p>}
        {status === 'success' && (
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
                  className='text-center max-sm:text-sm even:bg-slate-50 bg-custom-light whitespace-nowrap hover:bg-custom-medium'
                >
                  <td className='py-1 px-2'>{account.name}</td>
                  <td className='py-1 px-2'>{account.lastname}</td>
                  <td className='py-1 px-2'>{account.username}</td>
                  <td className='py-1 px-2'>{translateRole(account.role)}</td>
                  <td className='py-1 flex justify-center'>
                    <Link
                      className='focus:outline-none focus:border focus:border-custom-light focus:ring-2 rounded p-1.5 bg-teal-600 hover:bg-teal-700 focus:ring-teal-600'
                      to='/'
                    >
                      <BiSolidShow color='white' />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </article>
    </section>
  );
};
export default AccountListPage;
