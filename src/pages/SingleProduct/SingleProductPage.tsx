import { NavLink, Outlet } from 'react-router-dom';

export const SingleProductPage = () => {
  //  todo: rebajar el tamaño de las letras para mañana, ver el comun denominador
  return (
    <div className='w-full flex p-5 justify-center'>
      <div className='max-w-7xl w-full flex flex-col items-center gap-5'>
        {/* Top page - Container to image and information base */}
        <section className='flex flex-wrap-reverse justify-evenly gap-5 w-full'>
          <article className='w-96'>
            <img
              src='https://1.bp.blogspot.com/-JCw0pdyp_7w/VAc1kOrvoFI/AAAAAAACTXY/FvawFkSX_Gs/s1600/paisajes%2Bnaturales%2B-%2Bnaturaleza%2B-%2Bnatural%2Bfree%2Blandscapes%2B-%2Bfotos%2Bde%2Bpaisajes%2B(4).jpg'
              alt='imagen'
            />
          </article>
          <article className='max-w-2xl w-full flex flex-col items-center gap-5 text-sm max-sm:text-xs bg-skin-form px-4 py-2'>
            <h1 className='text-2xl font-medium'>Flor de navidad</h1>
            <div className='grid grid-cols-2 gap-y-1'>
              <p className='font-medium'>Nombre Cientifico:</p>
              <p>euphorbia pulcherrima</p>

              <p className='font-medium'>Familia:</p>
              <p>
                <i>euphorbiaceae</i>
              </p>

              <p className='font-medium'>Estado:</p>
              <p>DISPONIBLE</p>

              <p className='font-medium'>Classificaciones:</p>
              <ul>
                <li>ORNAMENTAL</li>
                <li>FORESTAL</li>
              </ul>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-medium tracking-wide'>DESCRIPCION</p>
              <p>
                Planta perennes, herbáceas o leñosas, erectas, rastreras o
                trepadoras, de hojas muy decorativas. Las hojas son de
                consistencia y grosor notables, ovales, en forma de corazón o
                punta de flecha, bastante grande, a veces divididas en lóbulos o
                incluso en forma de mano.
              </p>
            </div>
          </article>
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
