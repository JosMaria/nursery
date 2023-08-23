import { DATA_TECHNICAL_SHEET } from '../data';

export const TechnicalSheetPage = () => {
  return (
    <article className='bg-blue-200 flex flex-col gap-2 p-3'>
      {DATA_TECHNICAL_SHEET.map((data, index) => (
        <div key={index} className='text-sm flex max-md:flex-col max-sm:text-xs md:gap-5 border-b-2 border-black'>
          <b>{data.word}</b>
          <p>{data.info}</p>
        </div>
      ))}
    </article>
  );
};
