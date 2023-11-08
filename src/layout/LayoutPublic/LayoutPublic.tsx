import { Outlet } from 'react-router-dom';
import { getThemeByRole } from '../../utils';
import { useProfileBase } from '../../store';
import { Header } from './components';
import { Footer } from '../../components';

export const LayoutPublic = () => {
  const { role } = useProfileBase();

  return (
    <div className={`${getThemeByRole(role)} flex flex-col justify-between min-h-screen`}>
      <Header />
      <main className='flex-1 bg-sky-100 w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
