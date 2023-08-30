export const SkeletonCatalogPage = () => (
  <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 place-items-center gap-2 xs:gap-2 sm:gap-5 lg:gap-10 w-full py-5'>
    {[...Array(12).keys()].map((i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

const SkeletonCard = () => (
  <div
    role='status'
    className='w-80 max-xl:w-72 max-md:w-60 max-sm:w-48 max-xs:w-40 max-sm:p-1 p-4 border-2 rounded shadow animate-pulse'
  >
    <div className='h-52 max-md:h-40 max-sm:h-36 max-xs:h-32 mb-5 max-sm:mb-2 rounded dark:bg-slate-700'></div>
    <div className='flex flex-col items-center gap-1.5 max-xs:gap-0.5'>
      <div className='h-3 max-xs:h-2 rounded-full bg-slate-700 w-1/2 mb-1'></div>
      <div className='h-2 max-xs:h-1 rounded-full bg-slate-700 w-full'></div>
      <div className='h-2 max-xs:h-1 rounded-full bg-slate-700 w-full'></div>
      <div className='h-2 max-xs:h-1 rounded-full bg-slate-700 w-full'></div>
    </div>
    <span className='sr-only'>Loading...</span>
  </div>
);
