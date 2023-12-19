import { Outlet } from 'react-router-dom';
import { Header } from './components';
import { Footer } from '../../components';

export const LayoutPublic = () => (
  <div className='bg-teal-800 text-custom-light flex flex-col justify-between min-h-screen'>
    <Header />
    <main className='flex-1 bg-custom-light text-custom-dark py-4 max-sm:py-2 flex justify-center'>
      <Outlet />
    </main>
    <Footer />
  </div>
);
