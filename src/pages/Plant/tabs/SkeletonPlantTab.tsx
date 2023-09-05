export const SkeletonPlantTab = () => (
  <div
    role='status'
    className='animate-pulse w-full flex flex-col items-center gap-2 max-sm:gap-1 max-w-7xl'
  >
    {[...Array(10).keys()].map((i) => (
      <div key={i} className='bg-slate-700 h-2 max-sm:h-1 w-full'></div>
    ))}
    <span className='sr-only'>Loading...</span>
  </div>
);
