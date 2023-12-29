import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components';
import { Footer } from '../../components';
import { SidebarLarge } from './components/SidebarLarge';

export const LayoutPrivate = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className='min-h-screen flex flex-col justify-between gap-0.5'>
      <Header
        isOpenSidebar={isOpenSidebar}
        closeSidebar={() => setIsOpenSidebar(false)}
        openSidebar={() => setIsOpenSidebar(true)}
      />
      {/* <div className='lg:hidden'>
        {isOpenSidebar ? (
          <SidebarToDeviceSmall closeSidebar={() => setIsOpenSidebar(false)} />
        ) : (
          <main className='flex-1 bg-custom-light py-3'>
            <Outlet />
          </main>
        )}
      </div> */}

      <div className='flex-1 flex'>
        <SidebarLarge />
        <main className='flex-1 bg-custom-light'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
