import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { useToken } from '../store';

export const Layout = () => {
  const { token } = useToken();
  
  return (
    <div className={`${token && 'theme-admin'} flex flex-col min-h-screen justify-between`}>
      <Header />
      <main className='bg-skin-light flex-1 flex'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
