import { DATA_NOTES } from '../data';

export const NotesPage = () => {
  return (
    <ul className='list-decimal list-inside'>
      {DATA_NOTES.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};
