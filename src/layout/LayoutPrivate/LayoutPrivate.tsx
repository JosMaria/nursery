import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, SidebarToDeviceLarge, SidebarToDeviceSmall } from './components';
import { Footer } from '../../components';

export const LayoutPrivate = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className='h-screen flex flex-col justify-between'>
      <Header
        isOpenSidebar={isOpenSidebar}
        closeSidebar={() => setIsOpenSidebar(false)}
        openSidebar={() => setIsOpenSidebar(true)}
      />
      <div className='lg:hidden'>
        {isOpenSidebar ? (
          <SidebarToDeviceSmall closeSidebar={() => setIsOpenSidebar(false)} />
        ) : (
          <main className='bg-custom-light'>
            <Outlet />
          </main>
        )}
      </div>

      <div className='flex-1 flex max-lg:hidden'>
        <SidebarToDeviceLarge />
        <main className='flex-1 bg-custom-light p-0 sm:py-4 sm:px-2'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
