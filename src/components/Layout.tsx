import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => (
  <div className='flex flex-col'>
    <Header />
    <main className='flex flex-col items-center bg-stone-300 h-screen'>
      <Outlet />
    </main>
    <Footer />
  </div>
);
