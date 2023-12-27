import { Outlet } from 'react-router-dom';
import { Header } from './components';
import { Footer } from '../../components';

export const LayoutPublic = () => (
  <div className='bg-custom-dark text-custom-light flex flex-col justify-between min-h-screen'>
    <Header />
    <main className='flex-1 bg-custom-light text-custom-dark py-2 max-sm:py-1'>
      <Outlet />
    </main>
    <Footer />
  </div>
);
