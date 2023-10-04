import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

export const PlantContent = () => (
  <div className='flex flex-col items-center max-w-3xl w-full'>
    <Navbar />
    <Outlet />
  </div>
);
