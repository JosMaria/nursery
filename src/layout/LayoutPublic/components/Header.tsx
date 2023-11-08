import { BiLogIn } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { Navbar } from './Navbar';
import { TitleHeader } from '../../../components';

export const Header = () => (
  <header className='bg-sky-800 text-sky-100 px-2 max-lg:px-0 max-md:px-0 flex items-center max-lg:flex-wrap font-medium'>
    <TitleHeader />
    <Navbar />
    <div className='flex-1 flex flex-row-reverse'>
      <NavLink
        to='signin'
        className={({ isActive }) =>
          `flex p-2 w-fit ${isActive && 'bg-sky-950 border-b-2 border-sky-100'}`
        }
      >
        <BiLogIn size='1.5em' />
      </NavLink>
    </div>
  </header>
);
