import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';
import { Toaster } from 'react-hot-toast';
import { useUserRole } from '../store';
import { getThemeByRole } from '../utils';

export const LayoutPublic = () => {
  const role = useUserRole();
  
  return (
    <div className={`${getThemeByRole(role)} flex flex-col min-h-screen justify-between`}>
      <Toaster />
      <Header />
      <main className='bg-skin-light flex-1 flex justify-center py-5'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
