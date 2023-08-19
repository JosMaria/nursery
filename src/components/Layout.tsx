import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => (
  <div className='theme-assistant flex flex-col min-h-screen justify-between'>
    <Header />
    <main className='bg-skin-light flex-1'>
      <Outlet />
    </main>
    <Footer />
  </div>
);
