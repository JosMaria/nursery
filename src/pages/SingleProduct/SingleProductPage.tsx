import { Link, Outlet } from 'react-router-dom';
import {
  InformationSection,
  NavbarProduct,
  PicturesSection,
} from './components';

const URLS = [
  'https://i.pinimg.com/originals/ba/dd/fb/baddfb2632eab21938a54a82d1d6ad98.jpg',
  'https://i.pinimg.com/originals/5b/24/49/5b2449f21426630200adb3feb934cccd.jpg',
  'https://1.bp.blogspot.com/-cDvudXGc9Zg/UtAbAPh_e_I/AAAAAAAAM24/ja7S72vK61E/s1600/Dise%C3%B1o+de+jardines+en+macetas+3.+Blog+Vida+a+lo+Verde.jpg',
  'https://i.pinimg.com/736x/b2/7b/59/b27b59993d8efe9fbf43f205dbc76b43--garden-container-plant-containers.jpg',
];

export const SingleProductPage = () => {
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
          <NavbarProduct />
          <article className='border-2 border-t-0 border-black p-2'>
            <Outlet />
          </article>
        </section>
        <Link
          to='..'
          relative='route'
          className='custom-btn-form w-fit flex gap-3 max-sm:text-xs self-start'
        >
          &#10229;<span>Volver</span>
        </Link>
      </div>
    </div>
  );
};
