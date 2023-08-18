import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => (
  <div className='flex flex-col min-h-screen justify-between'>
    <Header />
    <main className='bg-skin-light flex flex-col items-center justify-center'>
      <Outlet />
    </main>
    <Footer />
  </div>
);
