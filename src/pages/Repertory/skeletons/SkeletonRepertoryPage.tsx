import { SkeletonItems } from './SkeletonItems';

export const SkeletonRepertoryPage = () => (
  <div
    role='status'
    className='animate-pulse w-full flex flex-col items-center gap-2 max-sm:gap-1 max-w-2xl p-1'
  >
    <div className='bg-slate-700 max-sm:h-6 h-8 max-w-xs w-60 rounded'></div>
    <SkeletonItems />
    <span className='sr-only'>Loading...</span>
  </div>
);
