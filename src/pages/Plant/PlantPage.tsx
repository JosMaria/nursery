import { Navbar } from './components';
import { Outlet } from 'react-router-dom';
import { fetchAllCommonNamesPlants } from './services';
import { useQuery } from '@tanstack/react-query';
import { PlantContextType } from './types';

const PlantPage = () => {
  const { data: simpleInfo, status } = useQuery({
    queryKey: ['info-simple'],
    queryFn: fetchAllCommonNamesPlants,
    refetchOnWindowFocus: false,
  });

  if (status === 'loading') return 'loading common names';
  if (status === 'error') return 'error common names';

  const context: PlantContextType = {
    simpleInfo,
  };

  return (
    <div className='flex flex-col items-center max-w-3xl w-full'>
      <Navbar />
      <Outlet context={context} />
    </div>
  );
};

export default PlantPage;
