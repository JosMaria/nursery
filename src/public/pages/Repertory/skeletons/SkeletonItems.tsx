export const SkeletonItems = () => (
  <div className='flex flex-col gap-1'>
    <div className='self-start bg-slate-700 max-sm:h-6 h-8 w-32 rounded'></div>
    <div className='flex flex-col gap-2 w-full'>
      <div className='flex gap-1 max-sm:gap-0.5'>
        {[...Array(4).keys()].map((i) => (
          <div key={i} className='bg-slate-700 w-32 h-8 max-sm:h-6 flex-1 rounded-sm'></div>
        ))}
      </div>

      <div className='flex flex-col gap-2 max-sm:gap-1.5'>
        {[...Array(20).keys()].map((i) => (
          <div key={i} className='bg-slate-700 w-full h-5 max-sm:h-3 rounded'></div>
        ))}
      </div>
    </div>
  </div>
);
