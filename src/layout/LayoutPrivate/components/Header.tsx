import { CloseButton, HambuguerButton, LogoutButton } from '.';
import { TitleHeader } from '../../../components';

interface HeaderProps {
  isOpenSidebar: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
}

export const Header = ({ isOpenSidebar, closeSidebar, openSidebar }: HeaderProps) => (
  <header className='px-3 py-1.5 max-sm:px-1 bg-custom-dark text-custom-light font-bold flex justify-between items-center'>
    <div className='flex items-center'>
      {isOpenSidebar ? (
        <CloseButton action={closeSidebar} />
      ) : (
        <HambuguerButton action={openSidebar} />
      )}

      <TitleHeader />
    </div>

    <div className='flex items-center gap-3'>
      <button className='flex flex-col text-sm max-sm:text-xs font-medium hover:bg-yellow-900 border-2 border-custom-light items-end rounded py-0.5 px-4 max-sm:px-2'>
        <p>JosMaria</p>
        <p>ADMINISTRADOR</p>
      </button>
      <LogoutButton />
    </div>
  </header>
);
