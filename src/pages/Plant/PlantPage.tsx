import { Outlet } from 'react-router-dom';
import { fetchAllCommonNamesPlants, fetchAllFamilies } from './services';
import { useQuery } from '@tanstack/react-query';

const PlantPage = () => {
  const { data: simpleInfo, status } = useQuery({
    queryKey: ['simple-info'],
    queryFn: fetchAllCommonNamesPlants,
  });

  const { data: families, status: statusFamilies } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
  });

  if (status === 'pending') return 'loading families';
  if (status === 'error') return 'error families';

  if (statusFamilies === 'pending') return 'loading simple info';
  if (statusFamilies === 'error') return 'error simple info';

  return (
    <div className='flex flex-col items-center max-w-3xl w-full'>
      <Outlet context={{ simpleInfo, families }} />
    </div>
  );
};

export default PlantPage;
