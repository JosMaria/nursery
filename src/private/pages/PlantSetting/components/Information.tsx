import { MdOutlineInfo } from 'react-icons/md';

export const Information = () => (
  <article className='w-full border-2 border-blue-700 bg-sky-300 rounded-md p-2 flex items-start gap-3'>
    <div className='max-sm:text-4xl text-5xl'>
      <MdOutlineInfo color='blue' className='bg-sky-200 rounded-full' />
    </div>
    <p className='max-xs:text-xs text-sm leading-tight'>
      Las fotos mostradas son las que actualmente tiene la planta para mostrarse en el catalogo,
      cuando se agregue una nueva foto entonces se actulizar&aacute; las fotos mostradas, tener en
      cuenta la foto que se sube, el peso de las imagenes, la calidad y su resoluci&oacute;n, ya que
      estas fotos seran para todo p&uacute;blico
    </p>
  </article>
);
