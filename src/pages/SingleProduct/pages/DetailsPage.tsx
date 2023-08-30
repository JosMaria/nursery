import { useDetailsPlant } from '../hooks';

export const DetailsPage = () => {
  const details = useDetailsPlant();

  return (
    <ol className='list-decimal list-inside'>
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ol>
  );
};
