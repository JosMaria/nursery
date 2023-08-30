import { useNotesPlant } from '../hooks';

export const NotesPage = () => {
  const notes = useNotesPlant();

  return (
    <ul className='list-decimal list-inside'>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};
