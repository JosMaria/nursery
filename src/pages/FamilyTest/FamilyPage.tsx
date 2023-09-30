import { Outlet } from 'react-router-dom';
import { Navbar } from './components';

const FamilyPage = () => {
  return (
    <div className='flex flex-col items-center gap-2 w-full'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default FamilyPage;
