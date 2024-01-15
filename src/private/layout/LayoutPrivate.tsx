import { SidebarLarge } from './components/SidebarLarge';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components';
import { Footer } from '../../components';

export const LayoutPrivate = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className='min-h-screen flex flex-col justify-between gap-0.5'>
      <Header
        isOpenSidebar={isOpenSidebar}
        closeSidebar={() => setIsOpenSidebar(false)}
        openSidebar={() => setIsOpenSidebar(true)}
      />
      <div className='flex-1 flex'>
        {isOpenSidebar && <SidebarLarge />}
        <main className={`flex-1 bg-custom-light ${isOpenSidebar && 'max-lg:hidden'}`}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
