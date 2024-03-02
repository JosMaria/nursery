import { TitleHeader } from '../../../components';
import { BiLogOut } from 'react-icons/bi';

interface HeaderProps {
  isOpenSidebar: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
}

export const Header = ({ isOpenSidebar, closeSidebar, openSidebar }: HeaderProps) => (
  <header className='px-2 py-1 max-sm:px-1 bg-custom-dark text-custom-light font-bold flex justify-between items-center'>
    <div className='flex items-center'>
      {isOpenSidebar ? (
        <button
          className='leading-none rounded text-2xl hover:bg-custom-dark-hover active:bg-custom-dark-hover w-8 h-8'
          onClick={closeSidebar}
        >
          &times;
        </button>
      ) : (
        <button
          className='leading-none rounded text-2xl hover:bg-custom-dark-hover active:bg-custom-dark-hover w-8 h-8'
          onClick={openSidebar}
        >
          &equiv;
        </button>
      )}

      <TitleHeader />
    </div>

    <div className='flex items-center gap-3'>
      <button className='flex flex-col text-sm max-sm:text-xs font-medium hover:bg-custom-dark-hover border border-custom-light items-end rounded px-4 max-sm:px-2'>
        <p>JosMaria</p>
        <p>ADMINISTRADOR</p>
      </button>
      <button className='flex justify-center items-center font-semibold text-2xl rounded-md hover:bg-custom-dark-hover active:bg-custom-dark-hover leading-none p-2'>
        <BiLogOut size='0.9em' />
      </button>
    </div>
  </header>
);
