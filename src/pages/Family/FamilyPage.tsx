import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import { useQuery } from '@tanstack/react-query';
import { ContextType } from './context';
import { fetchAllFamilies } from './services';

const FamilyPage = () => {
  const { data: families, status } = useQuery({
    queryKey: ['families'],
    queryFn: fetchAllFamilies,
  });

  if (status === 'loading') return 'loading families';  
  if (status === 'error') return 'error families';

  const context: ContextType = {
    families,
  };

  return (
    <section className='flex flex-col items-center max-w-lg w-full'>
      <Navbar />
      <Outlet context={context} />
    </section>
  );
};

export default FamilyPage;
