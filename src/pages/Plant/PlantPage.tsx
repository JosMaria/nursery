import { useQuery } from '@tanstack/react-query';
import { fetchAllCommonNamesPlants } from './services';
import { Navbar } from './components';
import { Outlet } from 'react-router-dom';

const PlantPage = () => {
  

  return (
    <div className='flex flex-col items-center max-w-3xl w-full'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PlantPage;
