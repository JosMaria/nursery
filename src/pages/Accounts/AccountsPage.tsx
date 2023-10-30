import { BiSolidShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

type UserResponseType = {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  role: 'ASSISTANT' | 'ADMINISTRATOR';
};

const USERS: UserResponseType[] = [
  {
    id: 1,
    firstname: 'Jose Maria',
    lastname: 'Aguilar Chambi',
    username: 'JosMaria',
    role: 'ASSISTANT',
  },
  {
    id: 2,
    firstname: 'Josias',
    lastname: 'Bustamante',
    username: 'Josias',
    role: 'ASSISTANT',
  },
  {
    id: 3,
    firstname: 'Carmen',
    lastname: 'Rosa',
    username: 'Docente',
    role: 'ASSISTANT',
  },
  {
    id: 4,
    firstname: 'Yoni',
    lastname: 'Montoya',
    username: 'Yoni',
    role: 'ASSISTANT',
  },
];

const AccountsPage = () => {
  return (
    <div className='flex flex-col gap-3 w-full items-center'>
      <h1 className='text-xl font-normal'>Cuentas de Administradores y Asistentes</h1>
      <table className='max-w-3xl w-full'>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};

const TableHeader = () => (
  <thead>
    <tr className='bg-skin-nav text-skin-light'>
      {['Nombre', 'Apellido', 'Usuario', 'Role', ''].map((titleHeader, index) => (
        <th key={index} className='py-2 px-4 font-medium text-sm'>
          {titleHeader}
        </th>
      ))}
    </tr>
  </thead>
);

const TableBody = () => (
  <tbody className=''>
    {USERS.map((user) => (
      <tr key={user.id} className='text-center text-sm even:bg-skin-light bg-slate-200'>
        <td className='py-1.5 px-4'>{user.firstname}</td>
        <td className='py-1.5 px-4'>{user.lastname}</td>
        <td className='py-1.5 px-4'>{user.username}</td>
        <td className='py-1.5 px-4'>{user.role}</td>
        <td className='py-1.5 flex justify-start'>
          <Link
            className='bg-teal-700 hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:outline-none rounded-md text-white px-1.5 py-1'
            to='/'
          >
            <BiSolidShow size='1.3em' />
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
);

export default AccountsPage;
