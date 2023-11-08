import { CloseButton, HambuguerButton, LogoutButton } from '.';
import { TitleHeader } from '../../../components';

interface HeaderProps {
  isOpenSidebar: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
}

export const Header = ({ isOpenSidebar, closeSidebar, openSidebar }: HeaderProps) => (
  <header className='h-14 px-3 max-sm:px-1 bg-sky-700 text-sky-100 font-bold flex justify-between items-center'>
    <div className='flex items-center'>
      {isOpenSidebar ? (
        <CloseButton action={closeSidebar} />
      ) : (
        <HambuguerButton action={openSidebar} />
      )}

      <TitleHeader />
    </div>

    <div className='flex items-center gap-3'>
      <div className='flex flex-col text-sm max-sm:text-xs font-medium bg-sky-950 text-sky-100 items-end rounded-md py-1 px-4 max-sm:px-2'>
        <p>JosMaria</p>
        <p>ADMINISTRADOR</p>
      </div>
      <LogoutButton />
    </div>
  </header>
);
