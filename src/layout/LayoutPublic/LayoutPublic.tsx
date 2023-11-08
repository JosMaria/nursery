import { Outlet } from 'react-router-dom';
//import { useProfileBase } from '../../store';
import { Header } from './components';
import { Footer } from '../../components';

export const LayoutPublic = () => {
  //const { role } = useProfileBase();

  return (
    <div className='bg-custom-dark text-custom-light flex flex-col justify-between min-h-screen'>
      <Header />
      <main className='flex-1 bg-custom-light text-custom-dark w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
