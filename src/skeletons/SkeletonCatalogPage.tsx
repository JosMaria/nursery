export const SkeletonCatalogPage = () => (
  <div role='status' className=' shadow animate-pulse w-full'>
    <div className=' flex flex-wrap  justify-evenly gap-16 max-md:gap-8 max-xs:gap-3 px-10 max-md:px-5 max-sm:px-2'>
      {[...Array(12).keys()].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
    <span className='sr-only'>Loading...</span>
  </div>
);

const SkeletonCard = () => (
  <div className='flex flex-col gap-2 w-80 max-xl:w-72 max-md:w-60 max-sm:w-48 max-xs:w-36 p-2 max-sm:p-0.5 border-4 border-custom-dark rounded'>
    <div className='h-52 max-md:h-40 max-sm:h-36 max-xs:h-32 rounded bg-custom-dark'></div>
    <div className='flex flex-col items-center gap-1.5 max-xs:gap-0.5'>
      <div className='h-3 max-xs:h-2 rounded-full bg-custom-dark w-1/2 mb-0.5'></div>
      <div className='h-2 max-xs:h-1 rounded-full bg-custom-dark w-full'></div>
      <div className='h-2 max-xs:h-1 rounded-full bg-custom-dark w-full'></div>
      <div className='h-2 max-xs:h-1 rounded-full bg-custom-dark w-full'></div>
    </div>
  </div>
);
