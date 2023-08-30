import { Link, Outlet } from 'react-router-dom';
import { InformationSection, Navbar, PicturesSection } from '../components';

export const PlantContent = () => (
  <div className='w-full flex p-5 justify-center'>
    <div className='max-w-7xl w-full flex flex-col items-center gap-5'>
      <section className='flex flex-wrap-reverse justify-evenly gap-5 w-full'>
        <PicturesSection />
        <InformationSection />
      </section>

      <section className='w-full text-sm max-sm:text-xs'>
        <Navbar />
        <article className='border-2 border-t-0 border-black p-2'>
          <Outlet />
        </article>
      </section>

      <Link
        to='/'
        className='custom-btn-form w-fit flex gap-3 max-sm:text-xs self-start'
      >
        &#10229;<span>Volver</span>
      </Link>
    </div>
  </div>
);
