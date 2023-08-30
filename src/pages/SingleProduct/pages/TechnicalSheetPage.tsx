import { useTechnicalSheetPlant } from '../hooks';

export const TechnicalSheetPage = () => {
  const technicalSheeet = useTechnicalSheetPlant();

  return (
    <div className='flex flex-col gap-2'>
      {technicalSheeet.map((data, index) => (
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
