export const SkeletonCatalog = () => (
  <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 place-items-center gap-2 xs:gap-2 sm:gap-5 lg:gap-10 w-full py-5'>
    {[...Array(12).keys()].map((i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

const SkeletonCard = () => {
  return (
    <div
      role='status'
      className='w-80 p-4 border-2 rounded shadow animate-pulse'
    >
      <div className='h-52 mb-5 rounded dark:bg-slate-700'></div>
      <div className='flex flex-col items-center gap-1.5'>
        <div className='h-3 rounded-full bg-slate-700 w-40 mb-1'></div>
        <div className='h-2 rounded-full bg-slate-700 w-full'></div>
        <div className='h-2 rounded-full bg-slate-700 w-full'></div>
        <div className='h-2 rounded-full bg-slate-700 w-full'></div>
      </div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};
