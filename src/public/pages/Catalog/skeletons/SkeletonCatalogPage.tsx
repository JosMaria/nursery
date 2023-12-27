import { SkeletonProducts } from '.';

export const SkeletonCatalogPage = () => (
  <div
    role='status'
    className=' shadow animate-pulse w-full flex flex-col items-center gap-4 max-sm:gap-2'
  >
    <div className='max-sm:w-56 max-md:w-64 max-lg:max-w-xs max-w-sm w-full bg-custom-dark max-sm:h-6 max-lg:h-8 h-10 rounded'></div>
    <SkeletonProducts />
    <div className='h-8 max-sm:h-6 w-full flex justify-center gap-5 max-sm:gap-1.5'>
      <div className='rounded bg-custom-dark max-sm:w-8 w-10'></div>
      <div className='rounded bg-custom-dark max-sm:w-24 w-28'></div>
      <div className='rounded bg-custom-dark max-sm:w-24 w-28'></div>
      <div className='rounded bg-custom-dark max-sm:w-8 w-10'></div>
    </div>
    <span className='sr-only'>Loading...</span>
  </div>
);
