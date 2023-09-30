import { Outlet } from 'react-router-dom';
import { Navbar } from './components';

const FamilyPage = () => {
  return (
    <section className='flex flex-col items-center max-w-lg w-full'>
      <Navbar />
      <Outlet />
    </section>
  );
};

export default FamilyPage;
