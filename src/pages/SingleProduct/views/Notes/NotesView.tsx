import { useNotesPlant } from '../../hooks';

const NotesView = () => {
  const notes = useNotesPlant();

  return (
    <ul className='list-decimal list-inside flex flex-col gap-3'>
      {notes.length === 0 ? (
        <p className='text-center font-medium text-base py-3 max-sm:text-xs max-sm:py-2 bg-skin-dark text-skin-light'>
          Sin Notas
        </p>
      ) : (
        notes.map((note, index) => <li key={index}>{note}</li>)
      )}
    </ul>
  );
};

export default NotesView;
