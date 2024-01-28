import { MdOutlineInfo } from 'react-icons/md';

export const Information = () => (
  <article className='w-full border-2 border-blue-700 bg-sky-300 rounded-md p-2 flex items-center gap-3'>
    <div className='max-sm:text-4xl text-5xl'>
      <MdOutlineInfo color='blue' className='bg-sky-200 rounded-full' />
    </div>
    <ul className='max-xs:text-xs text-sm'>
      <li>- primer item</li>
      <li>- segundo item</li>
      <li>- tercer item</li>
    </ul>
  </article>
);
