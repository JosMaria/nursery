import { Fragment, useState } from 'react';
import { SIDEBAR_DATA } from '../constants/sidebaData';
import { NavLink } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
import { SidebarDataType } from '../types/sidebarTypes';

interface SidebarToDeviceSmallProps {
  closeSidebar: () => void;
}

export const SidebarToDeviceSmall = ({ closeSidebar }: SidebarToDeviceSmallProps) => (
  <aside className='w-full bg-sky-700 text-sky-100'>
    {SIDEBAR_DATA.map((item, index) => (
      <Fragment key={index}>
        <div className='flex flex-col'>
          <h2 className='font-medium px-4 py-2 max-sm:py-1.5 max-sm:text-sm'>{item.header}</h2>
          {item.content.map((navlinkItem, index) => (
            <NavLink
              key={index}
              to={navlinkItem.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `${
                  isActive ? 'bg-sky-950' : 'hover:bg-sky-800'
                } px-10 py-2 max-sm:py-1.5 flex text-sm max-sm:text-xs`
              }
            >
              {navlinkItem.title}
            </NavLink>
          ))}
        </div>
      </Fragment>
    ))}
  </aside>
);

export const SidebarToDeviceLarge = () => (
  <aside className='bg-sky-700 max-w-xs w-full h-screen text-sky-100'>
    {SIDEBAR_DATA.map((item, index) => (
      <NavLinkSection key={index} section={item} />
    ))}
  </aside>
);

interface NavLinkSectionProps {
  section: SidebarDataType;
}

const NavLinkSection = ({ section }: NavLinkSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className='hover:bg-sky-800 px-6 py-2 flex justify-between text-sm cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className='text-lg font-medium'>{section.header}</p>
        <BiChevronDown
          size='1.9em'
          className={`${!isOpen && '-rotate-90'} ${
            isOpen && 'bg-sky-800'
          } duration-300 rounded-full`}
        />
      </div>

      <div className={`${!isOpen && 'hidden'} text-sm font-medium`}>
        {section.content.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `${isActive ? 'bg-sky-900' : 'hover:bg-sky-800'} px-10 py-2 flex`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};
