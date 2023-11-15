export const SkeletonRepertoryPage = () => (
  <div
    role='status'
    className='animate-pulse w-full flex flex-col items-center gap-5 max-sm:gap-3 max-w-2xl p-5'
  >
    <div className='flex justify-between gap-5 w-full'>
      <div className='bg-slate-700 h-8 basis-40'></div>
      <div className='bg-slate-700 h-8 basis-40'></div>
    </div>

    <div className='flex flex-col gap-3 w-full'>
      <div className='flex gap-2'>
        {[...Array(4).keys()].map((i) => (
          <div key={i} className='bg-slate-700 w-32 h-10 max-sm:h-6 flex-1 rounded-sm'></div>
        ))}
      </div>

      <div className='flex flex-col gap-3'>
        {[...Array(20).keys()].map((i) => (
          <div key={i} className='bg-slate-700 w-full h-4 max-sm:h-3 rounded-sm'></div>
        ))}
      </div>
    </div>

    <span className='sr-only'>Loading...</span>
  </div>
);
