import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';
import { Toaster } from 'react-hot-toast';

const LayoutPublic = () => (
  <div className='theme-admin flex flex-col min-h-screen justify-between'>
    <Toaster />
    <Header />
    <main className='bg-skin-light flex-1 flex justify-center'>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default LayoutPublic;