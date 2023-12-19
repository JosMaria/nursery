export const SkeletonProducts = () => (
  <div className='w-full grid max-md:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 justify-items-center max-md:gap-y-5 max-lg:gap-y-10 gap-y-16'>
    {[...Array(12).keys()].map((i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

const SkeletonCard = () => (
  <div className='flex flex-col gap-2 w-36 xs:w-48 sm:w-60 lg:w-72 xl:w-80 2xl:w-96 p-1.5 max-sm:p-0.5 border-4 border-custom-dark rounded'>
    <div className='h-28 xs:h-32 sm:h-40 md:h-44 lg:h-56 xl:h-60 2xl:h-72 rounded bg-custom-dark'></div>
    <div className='flex flex-col items-center gap-1.5 max-xs:gap-0.5'>
      <div className='h-3 max-xs:h-2 rounded-full bg-custom-dark w-1/2 mb-0.5'></div>
      <div className='h-2 max-xs:h-1 rounded-full bg-custom-dark w-full'></div>
      <div className='h-2 max-xs:h-1 rounded-full bg-custom-dark w-full'></div>
      <div className='h-2 max-xs:h-1 rounded-full bg-custom-dark w-full'></div>
    </div>
  </div>
);
