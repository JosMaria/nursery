export const SkeletonProductPage = () => (
  <div role='status' className='animate-pulse opacity-80 w-full flex justify-center items-start'>
    <div className='w-full max-w-5xl flex flex-col p-3 gap-10 max-sm:gap-5'>
      <div className='flex flex-wrap justify-evenly gap-10 max-sm:gap-6 w-full'>
        <div className='flex flex-col gap-4 max-sm:gap-2 item-center max-w-xl w-full max-h-72'>
          <div className='bg-custom-dark h-10 max-sm:h-6 w-1/2 self-center rounded'></div>
          <div className='flex flex-col gap-2 max-sm:gap-1'>
            {[...Array(10).keys()].map((i) => (
              <div key={i} className='bg-custom-dark h-3 max-sm:h-2 w-full rounded'></div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 max-w-xs w-full'>
          <div className='bg-custom-dark rounded-sm h-60'></div>
          <div className='flex justify-evenly w-full'>
            <div className='bg-custom-dark w-20 h-8 rounded-sm'></div>
            <div className='bg-custom-dark w-20 h-8 rounded-sm'></div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full gap-3 max-sm:gap-2'>
        <div className='flex gap-4 max-sm:gap-2'>
          {[...Array(2).keys()].map((i) => (
            <div key={i} className='flex bg-custom-dark h-10 max-sm:h-6 flex-1 rounded'></div>
          ))}
        </div>
        <div className='flex flex-col gap-2 max-sm:gap-1'>
          {[...Array(13).keys()].map((i) => (
            <div key={i} className='bg-custom-dark h-3 max-sm:h-2 rounded'></div>
          ))}
        </div>
      </div>
      <span className='sr-only'>Loading...</span>
    </div>
  </div>
);
