import { useTechnicalSheet } from '../hooks';

const TechnicalSheetView = () => {
  const technicalSheet = useTechnicalSheet();

  return (
    <div className='flex flex-col gap-1 py-1 px-2 bg-custom-medium border-custom-dark border-x-4 border-b-4 max-sm:text-sm'>
      {technicalSheet.length === 0 ? (
        <p className='text-center font-medium text-base py-3 max-sm:text-xs max-sm:py-2 bg-skin-dark text-skin-light'>
          Sin Ficha Tecnica
        </p>
      ) : (
        technicalSheet.map((data, index) => (
          <div key={index} className='flex items-baseline max-md:flex-col md:gap-2'>
            <b>{data.word}</b>
            <p className='leading-tight'>{data.info}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TechnicalSheetView;
