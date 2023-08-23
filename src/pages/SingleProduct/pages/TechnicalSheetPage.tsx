import { DATA_TECHNICAL_SHEET } from '../data';

export const TechnicalSheetPage = () => {
  return (
    <div className='flex flex-col gap-2'>
      {DATA_TECHNICAL_SHEET.map((data, index) => (
        <div
          key={index}
          className='flex max-md:flex-col md:gap-5 border-b-2 border-black'
        >
          <b>{data.word}</b>
          <p>{data.info}</p>
        </div>
      ))}
    </div>
  );
};
