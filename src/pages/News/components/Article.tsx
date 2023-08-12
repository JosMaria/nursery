import { Link } from 'react-router-dom';

interface Props {
  title: string;
  date: Date;
  briefDescription: string;
}
export const Article = ({ title, date, briefDescription }: Props) => (
  <Link
    to='/news/1'
    className='flex flex-col gap-2 p-5 border-2 border-slate-500 rounded-xl bg-[#dfd4c2]'
  >
    <h2 className='text-2xl font-semibold'>{title}</h2>
    <span className='text-zinc-500 font-medium'>{`${date.getDay()} de ${date
      .getMonth()
      .toLocaleString()} del ${date.getFullYear()}`}</span>
    <p className='font-medium'>{briefDescription}</p>
    <p className='text-blue-800 font-medium'>Read more...</p>
  </Link>
);
