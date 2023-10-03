import { useTechnicalSheet } from '../../hooks';

const TechnicalSheetView = () => {
  const technicalSheet = useTechnicalSheet();

  return (
    <div className='flex flex-col gap-2'>
      {technicalSheet.length === 0 ? (
        <p className='text-center font-medium text-base py-3 max-sm:text-xs max-sm:py-2 bg-skin-dark text-skin-light'>
          Sin Ficha Tecnica
        </p>
      ) : (
        technicalSheet.map((data, index) => (
          <div key={index} className='flex max-md:flex-col md:gap-5 border-b-2 border-black'>
            <b>{data.word}</b>
            <p>{data.info}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TechnicalSheetView;
