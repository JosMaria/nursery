import { DATA_DETAILS } from '../data';

export const DetailsPage = () => {
  return (
    <ol className='list-decimal list-inside'>
      {DATA_DETAILS.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ol>
  );
};
