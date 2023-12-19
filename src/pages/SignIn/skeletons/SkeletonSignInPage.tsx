export const SkeletonSignInPage = () => (
  <div role='status' className='animate-pulse w-full flex justify-center'>
    <div className='flex flex-col items-center gap-3'>
      <div className='bg-slate-700 h-6 max-w-xs w-48 rounded'></div>
      <div className='h-fit max-w-sm w-full border-4 border-slate-700 rounded flex flex-col items-center gap-5 p-5 max-sm:p-3'>
        <div className='flex flex-col gap-1'>
          <div className='bg-slate-700 h-3.5 max-w-xs w-28'></div>
          <div className='bg-slate-700 max-sm:h-6 h-7 max-w-xs max-sm:w-60 w-72 rounded'></div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='bg-slate-700 h-3.5 max-w-xs w-28'></div>
          <div className='bg-slate-700 max-sm:h-6 h-7 max-w-xs max-sm:w-60 w-72 rounded'></div>
        </div>
        <div className='bg-slate-700 max-sm:h-6 h-7 max-w-xs w-32 rounded'></div>
      </div>
    </div>
    <span className='sr-only'>Loading...</span>
  </div>
);
