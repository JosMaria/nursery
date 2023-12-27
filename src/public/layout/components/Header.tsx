import { STYLE_SIGNIN_BUTTON, STYLE_TAB_SELECTED } from '../../../public/layout/constants';
import { TitleHeader } from '../../../components';
import { BiLogIn } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { Navbar } from '.';

export const Header = () => (
  <header className='flex justify-between items-center gap-x-5 max-md:flex-wrap px-2 max-md:px-0'>
    <TitleHeader />
    <Navbar />
    <NavLink
      className={({ isActive }) => `${STYLE_SIGNIN_BUTTON} ${isActive && STYLE_TAB_SELECTED}`}
      to='signin'
      children={<BiLogIn size='1.5em' />}
    />
  </header>
);
