import { NavLink, Outlet } from 'react-router-dom';

export const SingleProductPage = () => {
  //  todo: rebajar el tamaño de las letras para mañana, ver el comun denominador
  return (
    <div className='w-full flex p-5 justify-center'>
      <div className='max-w-7xl w-full flex flex-col items-center gap-10'>
        {/* Top page - Container to image and information base */}
        <section className='flex flex-wrap-reverse justify-evenly gap-5 w-full'>
          <article className='w-96'>
            <img
              src='https://1.bp.blogspot.com/-JCw0pdyp_7w/VAc1kOrvoFI/AAAAAAACTXY/FvawFkSX_Gs/s1600/paisajes%2Bnaturales%2B-%2Bnaturaleza%2B-%2Bnatural%2Bfree%2Blandscapes%2B-%2Bfotos%2Bde%2Bpaisajes%2B(4).jpg'
              alt='imagen'
            />
          </article>
          <article className='max-w-2xl w-full flex flex-col items-center gap-5 bg-slate-100 '>
            <h1 className='text-2xl font-medium'>Flor de navidad</h1>
            <div className='grid grid-cols-2 gap-y-1'>
              <p className='font-medium text-sm'>Nombre Cientifico:</p>
              <p className='text-sm'>euphorbia pulcherrima</p>

              <p className='font-medium text-sm'>Familia:</p>
              <p className='text-sm'>
                <i>euphorbiaceae</i>
              </p>

              <p className='font-medium text-sm'>Estado:</p>
              <p className='text-sm'>DISPONIBLE</p>

              <p className='font-medium text-sm'>Classificaciones:</p>
              <ul className='text-sm'>
                <li>ORNAMENTAL</li>
                <li>FORESTAL</li>
              </ul>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-medium tracking-wide'>DESCRIPCION</p>
              <p className=' text-sm'>
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
        <section className='w-full'>
          <nav className='bg-skin-nav bg-opacity-20 flex max-sm:text-xs max-md:text-xs rounded-t-lg text-center'>
            <NavLink
              to='.'
              end
              className={({ isActive }) =>
                isActive
                  ? `py-2 px-5 max-sm:px-1 rounded-t-md flex-1 w-full bg-skin-nav hover:bg-skin-btn-hover text-white border-b-4 border-white`
                  : `py-2 px-5 max-sm:px-1 rounded-t-md flex-1 w-full`
              }
            >
              Ficha tecnica
            </NavLink>
            <NavLink
              to='details'
              className={({ isActive }) =>
                isActive
                  ? `py-2 px-5 max-sm:px-1 rounded-t-md flex-1 w-full bg-skin-nav hover:bg-skin-btn-hover text-white border-b-4 border-white`
                  : `py-2 px-5 max-sm:px-1 rounded-t-md flex-1 w-full`
              }
            >
              Detalles
            </NavLink>
            <NavLink
              to='notes'
              className={({ isActive }) =>
                isActive
                  ? `py-2 px-5 max-sm:px-1 rounded-t-md flex-1 w-full bg-skin-nav hover:bg-skin-btn-hover text-white border-b-4 border-white`
                  : `py-2 px-5 max-sm:px-1 rounded-t-md flex-1 w-full`
              }
            >
              Notas
            </NavLink>
          </nav>
          <Outlet />
        </section>
      </div>
    </div>
  );
};
