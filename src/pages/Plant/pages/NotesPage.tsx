import { Suspense } from 'react';
import { useNotesPlant } from '../hooks';
import { Await } from 'react-router-dom';

const NotesPage = () => {
  const notes = useNotesPlant();

  return (
    <Suspense fallback={<p>Cargando Notas ...</p>}>
      <Await
        resolve={notes}
        errorElement={<p>No se pudo cargar las notas</p>}
        children={(resolvedNotes: string[]) => <Notes notes={resolvedNotes} />}
      ></Await>
    </Suspense>
  );
};

interface NotesProps {
  notes: string[];
}

const Notes = ({ notes }: NotesProps) => (
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

export default NotesPage;
