import { MdFirstPage, MdLastPage } from 'react-icons/md';

export const PaginationSection = () => (
  <article className='max-xs:overflow-x-scroll w-full flex justify-center gap-3'>
    <button
      className='button-custom px-2'
      // onClick={() => {
      //   setPageNumber((prev) => prev - 1);
      //   console.log('click button prev page');
      // }}
      // disabled={pageNumber === 0}
    >
      <MdFirstPage size='1.4em' />
    </button>
    <button className='button-custom'>Anterior</button>
    <button className='button-custom'>Siguiente</button>
    <button className='button-custom px-2'>
      <MdLastPage size='1.4em' />
    </button>
  </article>
);
