import { Link } from 'react-router-dom';

interface Props {
  title: string;
  date: Date;
  briefDescription: string;
}
export const Article = ({ title, date, briefDescription }: Props) => (
  <Link
    to='/news/1'
    className='flex flex-col gap-2 p-5 border-2 border-slate-500 rounded-xl bg-gray-300 max-md:text-sm'
  >
    <h2 className='text-2xl font-semibold max-md:text-xl max-sm:text-lg max-xs:text-base'>{title}</h2>
    <span className='text-zinc-500 font-medium space'>{`${date.getDay()} de ${date
      .getMonth()
      .toLocaleString()} del ${date.getFullYear()}`}</span>
    <p>{briefDescription}</p>
    <p className='text-blue-800 font-medium'>Leer mas...</p>
  </Link>
);
