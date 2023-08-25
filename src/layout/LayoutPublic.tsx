import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';
import { Toaster } from 'react-hot-toast';

export const LayoutPublic = () => (
  <div className='flex flex-col min-h-screen justify-between'>
    <Toaster />
    <Header />
    <main className='bg-skin-light flex-1 flex'>
      <Outlet />
    </main>
    <Footer />
  </div>
);
