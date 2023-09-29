const SkeletonPlantPage = () => (
  <div
    role='status'
    className='animate-pulse w-full flex flex-col items-center gap-10 max-sm:gap-5 max-w-7xl p-5'
  >
    <div className='flex flex-wrap-reverse justify-around gap-10 w-full p-5 max-sm:p-2'>
      <div className='flex flex-col gap-3 max-w-xs w-full'>
        <div className='bg-skin-skeleton rounded-md h-60'></div>
        <div className='flex justify-evenly w-full'>
          <div className='bg-skin-skeleton w-16 h-8 rounded-md'></div>
          <div className='bg-skin-skeleton w-16 h-8 rounded-md'></div>
        </div>
      </div>
      <div className='flex flex-col gap-5 item-center max-w-xl w-full max-h-72'>
        <div className='bg-skin-skeleton h-6 w-1/2 self-center'></div>
        <div className='flex flex-col gap-3 max-sm:gap-2'>
          {[...Array(10).keys()].map((i) => (
            <div key={i} className='bg-skin-skeleton h-3 max-sm:h-2 w-full'></div>
          ))}
        </div>
      </div>
    </div>

    <div className='flex flex-col w-full gap-5'>
      <div className='flex gap-5 max-sm:gap-2'>
        {[...Array(3).keys()].map((i) => (
          <div key={i} className='flex bg-skin-skeleton h-10 max-sm:h-8 flex-1'></div>
        ))}
      </div>

      <div className='flex flex-col gap-3 max-sm:gap-2'>
        {[...Array(12).keys()].map((i) => (
          <div key={i} className='bg-skin-skeleton h-3 max-sm:h-2'></div>
        ))}
      </div>
    </div>
    <span className='sr-only'>Loading...</span>
  </div>
);

export default SkeletonPlantPage;
