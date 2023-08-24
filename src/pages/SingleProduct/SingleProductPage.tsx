import { NavLink, Outlet } from 'react-router-dom';
import { InformationSection, PicturesSection } from './components';

const URLS = [
  'https://1.bp.blogspot.com/-Si6dlsgeaPQ/UtAcg7AxF9I/AAAAAAACIdQ/p80ZR0fKgdk/s1600/paisajes-naturales-nueva-colecci%C3%B3n-de-fotos-bonitas-landscape+(3).jpg',
  'https://i.pinimg.com/originals/c0/9d/f8/c09df8116570b19381b905653bca9341.jpg',
  'https://2.bp.blogspot.com/-dxvWO1aL3_w/Uetgi0x4SnI/AAAAAAAAJGA/XBIkSeYd8LI/s1600/1002932_FB_Google.jpg',
  'https://4.bp.blogspot.com/-QMGOoEe7ORo/UictQ1DRsJI/AAAAAAAB4ow/Q3F1jbR67fo/s400/cerca-del-cielo-y-los-planetas-im%C3%A1genes-de-fantas%C3%ADa-close-to-sky-landscape-1920x1200-wallpaper-.jpg',
]

export const SingleProductPage = () => {
  //  todo: rebajar el tamaño de las letras para mañana, ver el comun denominador
  return (
    <div className='w-full flex p-5 justify-center'>
      <div className='max-w-7xl w-full flex flex-col items-center gap-5'>
        {/* Top page - Container to image and information base */}
        <section className='flex flex-wrap-reverse justify-evenly gap-5 w-full'>
          <PicturesSection urlPictures={URLS} />
          <InformationSection />
        </section>
        {/* Middle page - Container to NavLinks and subpages */}
        <section className='w-full text-sm max-sm:text-xs'>
          <nav className='bg-skin-nav bg-opacity-20 flex font-medium text-base max-md:text-sm max-sm:text-xs text-center'>
            <NavLink
              to='.'
              end
              className={({ isActive }) =>
                isActive
                  ? `py-2 max-sm:px-1 flex-1 w-full bg-skin-nav text-skin-light`
                  : `py-2 max-sm:px-1 flex-1 w-full hover:bg-skin-nav hover:text-skin-light`
              }
            >
              Ficha tecnica
            </NavLink>
            <NavLink
              to='details'
              className={({ isActive }) =>
                isActive
                  ? `py-2 max-sm:px-1 flex-1 w-full bg-skin-nav text-skin-light`
                  : `py-2 max-sm:px-1 flex-1 w-full hover:bg-skin-nav hover:text-skin-light`
              }
            >
              Detalles
            </NavLink>
            <NavLink
              to='notes'
              className={({ isActive }) =>
                isActive
                  ? `py-2 max-sm:px-1 flex-1 w-full bg-skin-nav text-skin-light`
                  : `py-2 max-sm:px-1 flex-1 w-full hover:bg-skin-nav hover:text-skin-light`
              }
            >
              Notas
            </NavLink>
          </nav>
          <article className='border-2 border-t-0 border-black p-2'>
            <Outlet />
          </article>
        </section>
      </div>
    </div>
  );
};
