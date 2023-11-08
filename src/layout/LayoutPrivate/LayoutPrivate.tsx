import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, SidebarToDeviceLarge, SidebarToDeviceSmall } from './components';
import { Footer } from '../../components';

export const LayoutPrivate = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <>
      <Header
        isOpenSidebar={isOpenSidebar}
        closeSidebar={() => setIsOpenSidebar(false)}
        openSidebar={() => setIsOpenSidebar(true)}
      />
      <div className='lg:hidden'>
        {isOpenSidebar ? (
          <SidebarToDeviceSmall closeSidebar={() => setIsOpenSidebar(false)} />
        ) : (
          <main className='bg-pink-600 w-full h-screen'>
            <Outlet />
          </main>
        )}
      </div>

      <div className='flex max-lg:hidden'>
        <SidebarToDeviceLarge />
        <main className='bg-pink-600 w-full h-screen'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
