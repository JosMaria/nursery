import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => (
  <div className='flex flex-col min-h-screen justify-between'>
    <Header />
    <main className='flex flex-col items-center justify-center bg-stone-200 h-full'>
      <Outlet />
    </main>
    <Footer />
  </div>
);
